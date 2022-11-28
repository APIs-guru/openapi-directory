import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartInferenceSchedulerXAmzTargetEnum {
    AwsLookoutEquipmentFrontendServiceStartInferenceScheduler = "AWSLookoutEquipmentFrontendService.StartInferenceScheduler"
}
export declare class StartInferenceSchedulerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartInferenceSchedulerXAmzTargetEnum;
}
export declare class StartInferenceSchedulerRequest extends SpeakeasyBase {
    headers: StartInferenceSchedulerHeaders;
    request: shared.StartInferenceSchedulerRequest;
}
export declare class StartInferenceSchedulerResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    startInferenceSchedulerResponse?: shared.StartInferenceSchedulerResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
