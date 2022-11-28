import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AttachManagedPolicyToPermissionSetXAmzTargetEnum {
    SwbExternalServiceAttachManagedPolicyToPermissionSet = "SWBExternalService.AttachManagedPolicyToPermissionSet"
}
export declare class AttachManagedPolicyToPermissionSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AttachManagedPolicyToPermissionSetXAmzTargetEnum;
}
export declare class AttachManagedPolicyToPermissionSetRequest extends SpeakeasyBase {
    headers: AttachManagedPolicyToPermissionSetHeaders;
    request: shared.AttachManagedPolicyToPermissionSetRequest;
}
export declare class AttachManagedPolicyToPermissionSetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    attachManagedPolicyToPermissionSetResponse?: Map<string, any>;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
