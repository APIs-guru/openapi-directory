import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdatePermissionSetXAmzTargetEnum {
    SwbExternalServiceUpdatePermissionSet = "SWBExternalService.UpdatePermissionSet"
}
export declare class UpdatePermissionSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePermissionSetXAmzTargetEnum;
}
export declare class UpdatePermissionSetRequest extends SpeakeasyBase {
    headers: UpdatePermissionSetHeaders;
    request: shared.UpdatePermissionSetRequest;
}
export declare class UpdatePermissionSetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updatePermissionSetResponse?: Map<string, any>;
    validationException?: any;
}
