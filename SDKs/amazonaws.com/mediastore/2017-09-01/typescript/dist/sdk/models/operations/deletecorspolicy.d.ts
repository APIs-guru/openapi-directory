import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteCorsPolicyXAmzTargetEnum {
    MediaStore20170901DeleteCorsPolicy = "MediaStore_20170901.DeleteCorsPolicy"
}
export declare class DeleteCorsPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCorsPolicyXAmzTargetEnum;
}
export declare class DeleteCorsPolicyRequest extends SpeakeasyBase {
    headers: DeleteCorsPolicyHeaders;
    request: shared.DeleteCorsPolicyInput;
}
export declare class DeleteCorsPolicyResponse extends SpeakeasyBase {
    containerInUseException?: any;
    containerNotFoundException?: any;
    contentType: string;
    corsPolicyNotFoundException?: any;
    deleteCorsPolicyOutput?: Map<string, any>;
    internalServerError?: any;
    statusCode: number;
}
