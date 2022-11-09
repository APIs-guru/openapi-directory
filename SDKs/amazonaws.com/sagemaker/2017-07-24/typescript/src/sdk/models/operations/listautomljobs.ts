import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAutoMlJobsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListAutoMlJobsXAmzTargetEnum {
    SageMakerListAutoMlJobs = "SageMaker.ListAutoMLJobs"
}


export class ListAutoMlJobsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListAutoMlJobsXAmzTargetEnum;
}


export class ListAutoMlJobsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAutoMlJobsQueryParams;

  @Metadata()
  headers: ListAutoMlJobsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListAutoMlJobsRequest;
}


export class ListAutoMlJobsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listAutoMlJobsResponse?: shared.ListAutoMlJobsResponse;

  @Metadata()
  statusCode: number;
}
