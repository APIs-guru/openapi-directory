import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFeedbackQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class GetFeedbackHeaders extends SpeakeasyBase {
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


// GetFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback
/** 
 * An anomalous metric in an anomaly group.
**/
export class GetFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnomalyGroupId" })
  anomalyGroupId?: string;

  @Metadata({ data: "json, name=TimeSeriesId" })
  timeSeriesId?: string;
}


export class GetFeedbackRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnomalyDetectorArn" })
  anomalyDetectorArn: string;

  @Metadata({ data: "json, name=AnomalyGroupTimeSeriesFeedback" })
  anomalyGroupTimeSeriesFeedback: GetFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}


export class GetFeedbackRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFeedbackQueryParams;

  @Metadata()
  headers: GetFeedbackHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetFeedbackRequestBody;
}


export class GetFeedbackResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getFeedbackResponse?: shared.GetFeedbackResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  validationException?: any;
}
