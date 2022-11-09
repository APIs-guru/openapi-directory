import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetCorsPolicyXAmzTargetEnum {
    MediaStore20170901GetCorsPolicy = "MediaStore_20170901.GetCorsPolicy"
}
export declare class GetCorsPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCorsPolicyXAmzTargetEnum;
}
export declare class GetCorsPolicyRequest extends SpeakeasyBase {
    headers: GetCorsPolicyHeaders;
    request: shared.GetCorsPolicyInput;
}
export declare class GetCorsPolicyResponse extends SpeakeasyBase {
    containerInUseException?: any;
    containerNotFoundException?: any;
    contentType: string;
    corsPolicyNotFoundException?: any;
    getCorsPolicyOutput?: shared.GetCorsPolicyOutput;
    internalServerError?: any;
    statusCode: number;
}
