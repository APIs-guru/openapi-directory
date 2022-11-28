import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateClassificationJobPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class UpdateClassificationJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateClassificationJobRequestBodyJobStatusEnum {
    Running = "RUNNING",
    Paused = "PAUSED",
    Cancelled = "CANCELLED",
    Complete = "COMPLETE",
    Idle = "IDLE",
    UserPaused = "USER_PAUSED"
}
export declare class UpdateClassificationJobRequestBody extends SpeakeasyBase {
    jobStatus: UpdateClassificationJobRequestBodyJobStatusEnum;
}
export declare class UpdateClassificationJobRequest extends SpeakeasyBase {
    pathParams: UpdateClassificationJobPathParams;
    headers: UpdateClassificationJobHeaders;
    request: UpdateClassificationJobRequestBody;
}
export declare class UpdateClassificationJobResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    updateClassificationJobResponse?: Map<string, any>;
    validationException?: any;
}
