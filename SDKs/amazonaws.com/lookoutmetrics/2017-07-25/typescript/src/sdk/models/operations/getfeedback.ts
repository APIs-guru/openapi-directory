import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFeedbackQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class GetFeedbackHeaders extends SpeakeasyBase {
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
}


// GetFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback
/** 
 * An anomalous metric in an anomaly group.
**/
export class GetFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnomalyGroupId" })
  anomalyGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=TimeSeriesId" })
  timeSeriesId?: string;
}


export class GetFeedbackRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnomalyDetectorArn" })
  anomalyDetectorArn: string;

  @SpeakeasyMetadata({ data: "json, name=AnomalyGroupTimeSeriesFeedback" })
  anomalyGroupTimeSeriesFeedback: GetFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}


export class GetFeedbackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFeedbackQueryParams;

  @SpeakeasyMetadata()
  headers: GetFeedbackHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: GetFeedbackRequestBody;
}


export class GetFeedbackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getFeedbackResponse?: shared.GetFeedbackResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
