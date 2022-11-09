import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListTrainingJobsForHyperParameterTuningJobQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListTrainingJobsForHyperParameterTuningJobXAmzTargetEnum {
    SageMakerListTrainingJobsForHyperParameterTuningJob = "SageMaker.ListTrainingJobsForHyperParameterTuningJob"
}


export class ListTrainingJobsForHyperParameterTuningJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListTrainingJobsForHyperParameterTuningJobXAmzTargetEnum;
}


export class ListTrainingJobsForHyperParameterTuningJobRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListTrainingJobsForHyperParameterTuningJobQueryParams;

  @Metadata()
  headers: ListTrainingJobsForHyperParameterTuningJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListTrainingJobsForHyperParameterTuningJobRequest;
}


export class ListTrainingJobsForHyperParameterTuningJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listTrainingJobsForHyperParameterTuningJobResponse?: shared.ListTrainingJobsForHyperParameterTuningJobResponse;

  @Metadata()
  resourceNotFound?: any;

  @Metadata()
  statusCode: number;
}
