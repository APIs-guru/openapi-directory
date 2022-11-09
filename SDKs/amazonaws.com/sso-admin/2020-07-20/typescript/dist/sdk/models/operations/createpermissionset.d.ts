import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreatePermissionSetXAmzTargetEnum {
    SwbExternalServiceCreatePermissionSet = "SWBExternalService.CreatePermissionSet"
}
export declare class CreatePermissionSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePermissionSetXAmzTargetEnum;
}
export declare class CreatePermissionSetRequest extends SpeakeasyBase {
    headers: CreatePermissionSetHeaders;
    request: shared.CreatePermissionSetRequest;
}
export declare class CreatePermissionSetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createPermissionSetResponse?: shared.CreatePermissionSetResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
