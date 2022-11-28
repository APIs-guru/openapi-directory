import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetKeyPolicyXAmzTargetEnum {
    TrentServiceGetKeyPolicy = "TrentService.GetKeyPolicy"
}
export declare class GetKeyPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetKeyPolicyXAmzTargetEnum;
}
export declare class GetKeyPolicyRequest extends SpeakeasyBase {
    headers: GetKeyPolicyHeaders;
    request: shared.GetKeyPolicyRequest;
}
export declare class GetKeyPolicyResponse extends SpeakeasyBase {
    contentType: string;
    dependencyTimeoutException?: any;
    getKeyPolicyResponse?: shared.GetKeyPolicyResponse;
    invalidArnException?: any;
    kmsInternalException?: any;
    kmsInvalidStateException?: any;
    notFoundException?: any;
    statusCode: number;
}
