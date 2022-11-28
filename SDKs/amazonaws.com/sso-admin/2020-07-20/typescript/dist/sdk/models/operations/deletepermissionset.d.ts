import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeletePermissionSetXAmzTargetEnum {
    SwbExternalServiceDeletePermissionSet = "SWBExternalService.DeletePermissionSet"
}
export declare class DeletePermissionSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePermissionSetXAmzTargetEnum;
}
export declare class DeletePermissionSetRequest extends SpeakeasyBase {
    headers: DeletePermissionSetHeaders;
    request: shared.DeletePermissionSetRequest;
}
export declare class DeletePermissionSetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    deletePermissionSetResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
