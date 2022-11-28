import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateModelXAmzTargetEnum {
    AwsLookoutEquipmentFrontendServiceCreateModel = "AWSLookoutEquipmentFrontendService.CreateModel"
}
export declare class CreateModelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateModelXAmzTargetEnum;
}
export declare class CreateModelRequest extends SpeakeasyBase {
    headers: CreateModelHeaders;
    request: shared.CreateModelRequest;
}
export declare class CreateModelResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createModelResponse?: shared.CreateModelResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
