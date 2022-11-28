import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteInlinePolicyFromPermissionSetXAmzTargetEnum {
    SwbExternalServiceDeleteInlinePolicyFromPermissionSet = "SWBExternalService.DeleteInlinePolicyFromPermissionSet"
}
export declare class DeleteInlinePolicyFromPermissionSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteInlinePolicyFromPermissionSetXAmzTargetEnum;
}
export declare class DeleteInlinePolicyFromPermissionSetRequest extends SpeakeasyBase {
    headers: DeleteInlinePolicyFromPermissionSetHeaders;
    request: shared.DeleteInlinePolicyFromPermissionSetRequest;
}
export declare class DeleteInlinePolicyFromPermissionSetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    deleteInlinePolicyFromPermissionSetResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
