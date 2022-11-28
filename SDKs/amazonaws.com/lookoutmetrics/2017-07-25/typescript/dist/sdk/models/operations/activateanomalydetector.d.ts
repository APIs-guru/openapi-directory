import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActivateAnomalyDetectorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ActivateAnomalyDetectorRequestBody extends SpeakeasyBase {
    anomalyDetectorArn: string;
}
export declare class ActivateAnomalyDetectorRequest extends SpeakeasyBase {
    headers: ActivateAnomalyDetectorHeaders;
    request: ActivateAnomalyDetectorRequestBody;
}
export declare class ActivateAnomalyDetectorResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    activateAnomalyDetectorResponse?: Map<string, any>;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    validationException?: any;
}
