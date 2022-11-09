import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteMetricPolicyXAmzTargetEnum {
    MediaStore20170901DeleteMetricPolicy = "MediaStore_20170901.DeleteMetricPolicy"
}
export declare class DeleteMetricPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteMetricPolicyXAmzTargetEnum;
}
export declare class DeleteMetricPolicyRequest extends SpeakeasyBase {
    headers: DeleteMetricPolicyHeaders;
    request: shared.DeleteMetricPolicyInput;
}
export declare class DeleteMetricPolicyResponse extends SpeakeasyBase {
    containerInUseException?: any;
    containerNotFoundException?: any;
    contentType: string;
    deleteMetricPolicyOutput?: Map<string, any>;
    internalServerError?: any;
    policyNotFoundException?: any;
    statusCode: number;
}
