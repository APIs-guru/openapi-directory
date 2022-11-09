import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteContainerPolicyXAmzTargetEnum {
    MediaStore20170901DeleteContainerPolicy = "MediaStore_20170901.DeleteContainerPolicy"
}
export declare class DeleteContainerPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteContainerPolicyXAmzTargetEnum;
}
export declare class DeleteContainerPolicyRequest extends SpeakeasyBase {
    headers: DeleteContainerPolicyHeaders;
    request: shared.DeleteContainerPolicyInput;
}
export declare class DeleteContainerPolicyResponse extends SpeakeasyBase {
    containerInUseException?: any;
    containerNotFoundException?: any;
    contentType: string;
    deleteContainerPolicyOutput?: Map<string, any>;
    internalServerError?: any;
    policyNotFoundException?: any;
    statusCode: number;
}
