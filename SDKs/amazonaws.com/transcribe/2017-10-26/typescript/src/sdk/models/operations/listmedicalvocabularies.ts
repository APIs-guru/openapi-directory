import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListMedicalVocabulariesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListMedicalVocabulariesXAmzTargetEnum {
    TranscribeListMedicalVocabularies = "Transcribe.ListMedicalVocabularies"
}


export class ListMedicalVocabulariesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ListMedicalVocabulariesXAmzTargetEnum;
}


export class ListMedicalVocabulariesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListMedicalVocabulariesQueryParams;

  @Metadata()
  headers: ListMedicalVocabulariesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListMedicalVocabulariesRequest;
}


export class ListMedicalVocabulariesResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  listMedicalVocabulariesResponse?: shared.ListMedicalVocabulariesResponse;

  @Metadata()
  statusCode: number;
}
