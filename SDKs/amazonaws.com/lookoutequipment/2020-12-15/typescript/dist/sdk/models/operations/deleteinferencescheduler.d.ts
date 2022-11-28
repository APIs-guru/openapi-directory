import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteInferenceSchedulerXAmzTargetEnum {
    AwsLookoutEquipmentFrontendServiceDeleteInferenceScheduler = "AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler"
}
export declare class DeleteInferenceSchedulerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteInferenceSchedulerXAmzTargetEnum;
}
export declare class DeleteInferenceSchedulerRequest extends SpeakeasyBase {
    headers: DeleteInferenceSchedulerHeaders;
    request: shared.DeleteInferenceSchedulerRequest;
}
export declare class DeleteInferenceSchedulerResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
