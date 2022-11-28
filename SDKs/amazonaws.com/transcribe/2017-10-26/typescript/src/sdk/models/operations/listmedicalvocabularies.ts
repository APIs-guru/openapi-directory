import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListMedicalVocabulariesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListMedicalVocabulariesXAmzTargetEnum {
    TranscribeListMedicalVocabularies = "Transcribe.ListMedicalVocabularies"
}


export class ListMedicalVocabulariesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ListMedicalVocabulariesXAmzTargetEnum;
}


export class ListMedicalVocabulariesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListMedicalVocabulariesQueryParams;

  @SpeakeasyMetadata()
  headers: ListMedicalVocabulariesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListMedicalVocabulariesRequest;
}


export class ListMedicalVocabulariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  listMedicalVocabulariesResponse?: shared.ListMedicalVocabulariesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
