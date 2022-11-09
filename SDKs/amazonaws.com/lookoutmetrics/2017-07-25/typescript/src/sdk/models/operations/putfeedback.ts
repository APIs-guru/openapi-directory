import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutFeedbackHeaders extends SpeakeasyBase {
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
}


// PutFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback
/** 
 * Feedback for an anomalous metric.
**/
export class PutFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnomalyGroupId" })
  anomalyGroupId?: string;

  @Metadata({ data: "json, name=IsAnomaly" })
  isAnomaly?: boolean;

  @Metadata({ data: "json, name=TimeSeriesId" })
  timeSeriesId?: string;
}


export class PutFeedbackRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnomalyDetectorArn" })
  anomalyDetectorArn: string;

  @Metadata({ data: "json, name=AnomalyGroupTimeSeriesFeedback" })
  anomalyGroupTimeSeriesFeedback: PutFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback;
}


export class PutFeedbackRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutFeedbackHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutFeedbackRequestBody;
}


export class PutFeedbackResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  putFeedbackResponse?: Map<string, any>;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  validationException?: any;
}
