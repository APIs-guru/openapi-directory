import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListLabelingJobsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListLabelingJobsXAmzTargetEnum {
    SageMakerListLabelingJobs = "SageMaker.ListLabelingJobs"
}


export class ListLabelingJobsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListLabelingJobsXAmzTargetEnum;
}


export class ListLabelingJobsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListLabelingJobsQueryParams;

  @Metadata()
  headers: ListLabelingJobsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListLabelingJobsRequest;
}


export class ListLabelingJobsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listLabelingJobsResponse?: shared.ListLabelingJobsResponse;

  @Metadata()
  statusCode: number;
}
