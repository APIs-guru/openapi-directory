import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutCorsPolicyXAmzTargetEnum {
    MediaStore20170901PutCorsPolicy = "MediaStore_20170901.PutCorsPolicy"
}
export declare class PutCorsPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutCorsPolicyXAmzTargetEnum;
}
export declare class PutCorsPolicyRequest extends SpeakeasyBase {
    headers: PutCorsPolicyHeaders;
    request: shared.PutCorsPolicyInput;
}
export declare class PutCorsPolicyResponse extends SpeakeasyBase {
    containerInUseException?: any;
    containerNotFoundException?: any;
    contentType: string;
    internalServerError?: any;
    putCorsPolicyOutput?: Map<string, any>;
    statusCode: number;
}
