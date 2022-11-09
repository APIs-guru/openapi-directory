import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetFeedbackQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class GetFeedbackHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * An anomalous metric in an anomaly group.
**/
export declare class GetFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback extends SpeakeasyBase {
    anomalyGroupId?: string;
    timeSeriesId?: string;
}
export declare class GetFeedbackRequestBody extends SpeakeasyBase {
    anomalyDetectorArn: string;
    anomalyGroupTimeSeriesFeedback: GetFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback;
    maxResults?: number;
    nextToken?: string;
}
export declare class GetFeedbackRequest extends SpeakeasyBase {
    queryParams: GetFeedbackQueryParams;
    headers: GetFeedbackHeaders;
    request: GetFeedbackRequestBody;
}
export declare class GetFeedbackResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getFeedbackResponse?: shared.GetFeedbackResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    validationException?: any;
}
