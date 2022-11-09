import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListMedicalTranscriptionJobsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListMedicalTranscriptionJobsXAmzTargetEnum {
    TranscribeListMedicalTranscriptionJobs = "Transcribe.ListMedicalTranscriptionJobs"
}


export class ListMedicalTranscriptionJobsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListMedicalTranscriptionJobsXAmzTargetEnum;
}


export class ListMedicalTranscriptionJobsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListMedicalTranscriptionJobsQueryParams;

  @Metadata()
  headers: ListMedicalTranscriptionJobsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListMedicalTranscriptionJobsRequest;
}


export class ListMedicalTranscriptionJobsResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  listMedicalTranscriptionJobsResponse?: shared.ListMedicalTranscriptionJobsResponse;

  @Metadata()
  statusCode: number;
}
