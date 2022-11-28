import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteAnomalyDetectorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteAnomalyDetectorRequestBody extends SpeakeasyBase {
    anomalyDetectorArn: string;
}
export declare class DeleteAnomalyDetectorRequest extends SpeakeasyBase {
    headers: DeleteAnomalyDetectorHeaders;
    request: DeleteAnomalyDetectorRequestBody;
}
export declare class DeleteAnomalyDetectorResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    deleteAnomalyDetectorResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    validationException?: any;
}
