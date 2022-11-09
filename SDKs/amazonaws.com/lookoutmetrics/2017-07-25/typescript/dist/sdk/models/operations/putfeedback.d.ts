import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PutFeedbackHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Feedback for an anomalous metric.
**/
export declare class PutFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback extends SpeakeasyBase {
    anomalyGroupId?: string;
    isAnomaly?: boolean;
    timeSeriesId?: string;
}
export declare class PutFeedbackRequestBody extends SpeakeasyBase {
    anomalyDetectorArn: string;
    anomalyGroupTimeSeriesFeedback: PutFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback;
}
export declare class PutFeedbackRequest extends SpeakeasyBase {
    headers: PutFeedbackHeaders;
    request: PutFeedbackRequestBody;
}
export declare class PutFeedbackResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    putFeedbackResponse?: Map<string, any>;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    validationException?: any;
}
