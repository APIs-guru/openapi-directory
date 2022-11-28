import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutFeedbackHeaders extends SpeakeasyBase {
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


// PutFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback
/** 
 * Feedback for an anomalous metric.
**/
export class PutFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnomalyGroupId" })
  anomalyGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=IsAnomaly" })
  isAnomaly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TimeSeriesId" })
  timeSeriesId?: string;
}


export class PutFeedbackRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnomalyDetectorArn" })
  anomalyDetectorArn: string;

  @SpeakeasyMetadata({ data: "json, name=AnomalyGroupTimeSeriesFeedback" })
  anomalyGroupTimeSeriesFeedback: PutFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback;
}


export class PutFeedbackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutFeedbackHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutFeedbackRequestBody;
}


export class PutFeedbackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  putFeedbackResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
