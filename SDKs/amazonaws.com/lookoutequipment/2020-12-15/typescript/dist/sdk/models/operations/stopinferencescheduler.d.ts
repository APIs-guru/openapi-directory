import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopInferenceSchedulerXAmzTargetEnum {
    AwsLookoutEquipmentFrontendServiceStopInferenceScheduler = "AWSLookoutEquipmentFrontendService.StopInferenceScheduler"
}
export declare class StopInferenceSchedulerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopInferenceSchedulerXAmzTargetEnum;
}
export declare class StopInferenceSchedulerRequest extends SpeakeasyBase {
    headers: StopInferenceSchedulerHeaders;
    request: shared.StopInferenceSchedulerRequest;
}
export declare class StopInferenceSchedulerResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    stopInferenceSchedulerResponse?: shared.StopInferenceSchedulerResponse;
    throttlingException?: any;
    validationException?: any;
}
