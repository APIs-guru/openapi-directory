import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateInferenceSchedulerXAmzTargetEnum {
    AwsLookoutEquipmentFrontendServiceUpdateInferenceScheduler = "AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler"
}
export declare class UpdateInferenceSchedulerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateInferenceSchedulerXAmzTargetEnum;
}
export declare class UpdateInferenceSchedulerRequest extends SpeakeasyBase {
    headers: UpdateInferenceSchedulerHeaders;
    request: shared.UpdateInferenceSchedulerRequest;
}
export declare class UpdateInferenceSchedulerResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
