import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteLifecyclePolicyXAmzTargetEnum {
    MediaStore20170901DeleteLifecyclePolicy = "MediaStore_20170901.DeleteLifecyclePolicy"
}
export declare class DeleteLifecyclePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteLifecyclePolicyXAmzTargetEnum;
}
export declare class DeleteLifecyclePolicyRequest extends SpeakeasyBase {
    headers: DeleteLifecyclePolicyHeaders;
    request: shared.DeleteLifecyclePolicyInput;
}
export declare class DeleteLifecyclePolicyResponse extends SpeakeasyBase {
    containerInUseException?: any;
    containerNotFoundException?: any;
    contentType: string;
    deleteLifecyclePolicyOutput?: Map<string, any>;
    internalServerError?: any;
    policyNotFoundException?: any;
    statusCode: number;
}
