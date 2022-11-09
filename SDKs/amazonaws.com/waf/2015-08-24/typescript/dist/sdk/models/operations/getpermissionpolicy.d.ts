import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetPermissionPolicyXAmzTargetEnum {
    Awswaf20150824GetPermissionPolicy = "AWSWAF_20150824.GetPermissionPolicy"
}
export declare class GetPermissionPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPermissionPolicyXAmzTargetEnum;
}
export declare class GetPermissionPolicyRequest extends SpeakeasyBase {
    headers: GetPermissionPolicyHeaders;
    request: shared.GetPermissionPolicyRequest;
}
export declare class GetPermissionPolicyResponse extends SpeakeasyBase {
    contentType: string;
    getPermissionPolicyResponse?: shared.GetPermissionPolicyResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafNonexistentItemException?: any;
}
