import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetContainerPolicyXAmzTargetEnum {
    MediaStore20170901GetContainerPolicy = "MediaStore_20170901.GetContainerPolicy"
}
export declare class GetContainerPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetContainerPolicyXAmzTargetEnum;
}
export declare class GetContainerPolicyRequest extends SpeakeasyBase {
    headers: GetContainerPolicyHeaders;
    request: shared.GetContainerPolicyInput;
}
export declare class GetContainerPolicyResponse extends SpeakeasyBase {
    containerInUseException?: any;
    containerNotFoundException?: any;
    contentType: string;
    getContainerPolicyOutput?: shared.GetContainerPolicyOutput;
    internalServerError?: any;
    policyNotFoundException?: any;
    statusCode: number;
}
