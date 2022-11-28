import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutContainerPolicyXAmzTargetEnum {
    MediaStore20170901PutContainerPolicy = "MediaStore_20170901.PutContainerPolicy"
}
export declare class PutContainerPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutContainerPolicyXAmzTargetEnum;
}
export declare class PutContainerPolicyRequest extends SpeakeasyBase {
    headers: PutContainerPolicyHeaders;
    request: shared.PutContainerPolicyInput;
}
export declare class PutContainerPolicyResponse extends SpeakeasyBase {
    containerInUseException?: any;
    containerNotFoundException?: any;
    contentType: string;
    internalServerError?: any;
    putContainerPolicyOutput?: Map<string, any>;
    statusCode: number;
}
