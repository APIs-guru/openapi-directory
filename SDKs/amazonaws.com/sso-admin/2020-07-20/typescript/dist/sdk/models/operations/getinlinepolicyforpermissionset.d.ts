import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetInlinePolicyForPermissionSetXAmzTargetEnum {
    SwbExternalServiceGetInlinePolicyForPermissionSet = "SWBExternalService.GetInlinePolicyForPermissionSet"
}
export declare class GetInlinePolicyForPermissionSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetInlinePolicyForPermissionSetXAmzTargetEnum;
}
export declare class GetInlinePolicyForPermissionSetRequest extends SpeakeasyBase {
    headers: GetInlinePolicyForPermissionSetHeaders;
    request: shared.GetInlinePolicyForPermissionSetRequest;
}
export declare class GetInlinePolicyForPermissionSetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getInlinePolicyForPermissionSetResponse?: shared.GetInlinePolicyForPermissionSetResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
