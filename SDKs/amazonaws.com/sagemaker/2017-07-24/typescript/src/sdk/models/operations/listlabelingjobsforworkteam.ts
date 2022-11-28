import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListLabelingJobsForWorkteamQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListLabelingJobsForWorkteamXAmzTargetEnum {
    SageMakerListLabelingJobsForWorkteam = "SageMaker.ListLabelingJobsForWorkteam"
}


export class ListLabelingJobsForWorkteamHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListLabelingJobsForWorkteamXAmzTargetEnum;
}


export class ListLabelingJobsForWorkteamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListLabelingJobsForWorkteamQueryParams;

  @SpeakeasyMetadata()
  headers: ListLabelingJobsForWorkteamHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListLabelingJobsForWorkteamRequest;
}


export class ListLabelingJobsForWorkteamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listLabelingJobsForWorkteamResponse?: shared.ListLabelingJobsForWorkteamResponse;

  @SpeakeasyMetadata()
  resourceNotFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
