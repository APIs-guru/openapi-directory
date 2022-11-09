import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetLifecyclePolicyXAmzTargetEnum {
    MediaStore20170901GetLifecyclePolicy = "MediaStore_20170901.GetLifecyclePolicy"
}
export declare class GetLifecyclePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLifecyclePolicyXAmzTargetEnum;
}
export declare class GetLifecyclePolicyRequest extends SpeakeasyBase {
    headers: GetLifecyclePolicyHeaders;
    request: shared.GetLifecyclePolicyInput;
}
export declare class GetLifecyclePolicyResponse extends SpeakeasyBase {
    containerInUseException?: any;
    containerNotFoundException?: any;
    contentType: string;
    getLifecyclePolicyOutput?: shared.GetLifecyclePolicyOutput;
    internalServerError?: any;
    policyNotFoundException?: any;
    statusCode: number;
}
