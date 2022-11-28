import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutLifecyclePolicyXAmzTargetEnum {
    MediaStore20170901PutLifecyclePolicy = "MediaStore_20170901.PutLifecyclePolicy"
}
export declare class PutLifecyclePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutLifecyclePolicyXAmzTargetEnum;
}
export declare class PutLifecyclePolicyRequest extends SpeakeasyBase {
    headers: PutLifecyclePolicyHeaders;
    request: shared.PutLifecyclePolicyInput;
}
export declare class PutLifecyclePolicyResponse extends SpeakeasyBase {
    containerInUseException?: any;
    containerNotFoundException?: any;
    contentType: string;
    internalServerError?: any;
    putLifecyclePolicyOutput?: Map<string, any>;
    statusCode: number;
}
