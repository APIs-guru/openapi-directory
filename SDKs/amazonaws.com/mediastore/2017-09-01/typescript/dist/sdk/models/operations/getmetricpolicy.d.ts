import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetMetricPolicyXAmzTargetEnum {
    MediaStore20170901GetMetricPolicy = "MediaStore_20170901.GetMetricPolicy"
}
export declare class GetMetricPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMetricPolicyXAmzTargetEnum;
}
export declare class GetMetricPolicyRequest extends SpeakeasyBase {
    headers: GetMetricPolicyHeaders;
    request: shared.GetMetricPolicyInput;
}
export declare class GetMetricPolicyResponse extends SpeakeasyBase {
    containerInUseException?: any;
    containerNotFoundException?: any;
    contentType: string;
    getMetricPolicyOutput?: shared.GetMetricPolicyOutput;
    internalServerError?: any;
    policyNotFoundException?: any;
    statusCode: number;
}
