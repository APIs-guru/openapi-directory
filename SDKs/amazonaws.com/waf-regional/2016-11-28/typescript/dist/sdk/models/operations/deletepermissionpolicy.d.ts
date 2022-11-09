import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeletePermissionPolicyXAmzTargetEnum {
    AwswafRegional20161128DeletePermissionPolicy = "AWSWAF_Regional_20161128.DeletePermissionPolicy"
}
export declare class DeletePermissionPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePermissionPolicyXAmzTargetEnum;
}
export declare class DeletePermissionPolicyRequest extends SpeakeasyBase {
    headers: DeletePermissionPolicyHeaders;
    request: shared.DeletePermissionPolicyRequest;
}
export declare class DeletePermissionPolicyResponse extends SpeakeasyBase {
    contentType: string;
    deletePermissionPolicyResponse?: Map<string, any>;
    statusCode: number;
    wafInternalErrorException?: any;
    wafNonexistentItemException?: any;
    wafStaleDataException?: any;
}
