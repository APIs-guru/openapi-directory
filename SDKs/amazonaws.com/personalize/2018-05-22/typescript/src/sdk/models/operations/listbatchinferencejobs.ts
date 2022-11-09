import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListBatchInferenceJobsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListBatchInferenceJobsXAmzTargetEnum {
    AmazonPersonalizeListBatchInferenceJobs = "AmazonPersonalize.ListBatchInferenceJobs"
}


export class ListBatchInferenceJobsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListBatchInferenceJobsXAmzTargetEnum;
}


export class ListBatchInferenceJobsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListBatchInferenceJobsQueryParams;

  @Metadata()
  headers: ListBatchInferenceJobsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListBatchInferenceJobsRequest;
}


export class ListBatchInferenceJobsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  listBatchInferenceJobsResponse?: shared.ListBatchInferenceJobsResponse;

  @Metadata()
  statusCode: number;
}
