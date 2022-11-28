import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutPermissionPolicyXAmzTargetEnum {
    Awswaf20150824PutPermissionPolicy = "AWSWAF_20150824.PutPermissionPolicy"
}
export declare class PutPermissionPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutPermissionPolicyXAmzTargetEnum;
}
export declare class PutPermissionPolicyRequest extends SpeakeasyBase {
    headers: PutPermissionPolicyHeaders;
    request: shared.PutPermissionPolicyRequest;
}
export declare class PutPermissionPolicyResponse extends SpeakeasyBase {
    contentType: string;
    putPermissionPolicyResponse?: Map<string, any>;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidPermissionPolicyException?: any;
    wafNonexistentItemException?: any;
    wafStaleDataException?: any;
}
