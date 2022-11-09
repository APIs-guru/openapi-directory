import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum PutInlinePolicyToPermissionSetXAmzTargetEnum {
    SwbExternalServicePutInlinePolicyToPermissionSet = "SWBExternalService.PutInlinePolicyToPermissionSet"
}
export declare class PutInlinePolicyToPermissionSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutInlinePolicyToPermissionSetXAmzTargetEnum;
}
export declare class PutInlinePolicyToPermissionSetRequest extends SpeakeasyBase {
    headers: PutInlinePolicyToPermissionSetHeaders;
    request: shared.PutInlinePolicyToPermissionSetRequest;
}
export declare class PutInlinePolicyToPermissionSetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    putInlinePolicyToPermissionSetResponse?: Map<string, any>;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
