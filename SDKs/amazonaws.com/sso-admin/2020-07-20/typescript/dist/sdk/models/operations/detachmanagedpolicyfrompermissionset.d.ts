import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DetachManagedPolicyFromPermissionSetXAmzTargetEnum {
    SwbExternalServiceDetachManagedPolicyFromPermissionSet = "SWBExternalService.DetachManagedPolicyFromPermissionSet"
}
export declare class DetachManagedPolicyFromPermissionSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetachManagedPolicyFromPermissionSetXAmzTargetEnum;
}
export declare class DetachManagedPolicyFromPermissionSetRequest extends SpeakeasyBase {
    headers: DetachManagedPolicyFromPermissionSetHeaders;
    request: shared.DetachManagedPolicyFromPermissionSetRequest;
}
export declare class DetachManagedPolicyFromPermissionSetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    detachManagedPolicyFromPermissionSetResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
