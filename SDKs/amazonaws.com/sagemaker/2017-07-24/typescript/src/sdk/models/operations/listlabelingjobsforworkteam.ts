import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListLabelingJobsForWorkteamQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListLabelingJobsForWorkteamXAmzTargetEnum {
    SageMakerListLabelingJobsForWorkteam = "SageMaker.ListLabelingJobsForWorkteam"
}


export class ListLabelingJobsForWorkteamHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListLabelingJobsForWorkteamXAmzTargetEnum;
}


export class ListLabelingJobsForWorkteamRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListLabelingJobsForWorkteamQueryParams;

  @Metadata()
  headers: ListLabelingJobsForWorkteamHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListLabelingJobsForWorkteamRequest;
}


export class ListLabelingJobsForWorkteamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listLabelingJobsForWorkteamResponse?: shared.ListLabelingJobsForWorkteamResponse;

  @Metadata()
  resourceNotFound?: any;

  @Metadata()
  statusCode: number;
}
