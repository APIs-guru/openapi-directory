import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateInferenceSchedulerXAmzTargetEnum {
    AwsLookoutEquipmentFrontendServiceCreateInferenceScheduler = "AWSLookoutEquipmentFrontendService.CreateInferenceScheduler"
}
export declare class CreateInferenceSchedulerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateInferenceSchedulerXAmzTargetEnum;
}
export declare class CreateInferenceSchedulerRequest extends SpeakeasyBase {
    headers: CreateInferenceSchedulerHeaders;
    request: shared.CreateInferenceSchedulerRequest;
}
export declare class CreateInferenceSchedulerResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createInferenceSchedulerResponse?: shared.CreateInferenceSchedulerResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
