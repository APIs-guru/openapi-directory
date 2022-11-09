import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListHyperParameterTuningJobsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListHyperParameterTuningJobsXAmzTargetEnum {
    SageMakerListHyperParameterTuningJobs = "SageMaker.ListHyperParameterTuningJobs"
}


export class ListHyperParameterTuningJobsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListHyperParameterTuningJobsXAmzTargetEnum;
}


export class ListHyperParameterTuningJobsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListHyperParameterTuningJobsQueryParams;

  @Metadata()
  headers: ListHyperParameterTuningJobsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListHyperParameterTuningJobsRequest;
}


export class ListHyperParameterTuningJobsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listHyperParameterTuningJobsResponse?: shared.ListHyperParameterTuningJobsResponse;

  @Metadata()
  statusCode: number;
}
