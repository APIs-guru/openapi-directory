import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteModelXAmzTargetEnum {
    AwsLookoutEquipmentFrontendServiceDeleteModel = "AWSLookoutEquipmentFrontendService.DeleteModel"
}
export declare class DeleteModelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteModelXAmzTargetEnum;
}
export declare class DeleteModelRequest extends SpeakeasyBase {
    headers: DeleteModelHeaders;
    request: shared.DeleteModelRequest;
}
export declare class DeleteModelResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
