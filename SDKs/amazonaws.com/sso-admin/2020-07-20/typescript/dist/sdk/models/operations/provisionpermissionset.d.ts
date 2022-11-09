import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ProvisionPermissionSetXAmzTargetEnum {
    SwbExternalServiceProvisionPermissionSet = "SWBExternalService.ProvisionPermissionSet"
}
export declare class ProvisionPermissionSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ProvisionPermissionSetXAmzTargetEnum;
}
export declare class ProvisionPermissionSetRequest extends SpeakeasyBase {
    headers: ProvisionPermissionSetHeaders;
    request: shared.ProvisionPermissionSetRequest;
}
export declare class ProvisionPermissionSetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    provisionPermissionSetResponse?: shared.ProvisionPermissionSetResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
