import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum PutMetricPolicyXAmzTargetEnum {
    MediaStore20170901PutMetricPolicy = "MediaStore_20170901.PutMetricPolicy"
}
export declare class PutMetricPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutMetricPolicyXAmzTargetEnum;
}
export declare class PutMetricPolicyRequest extends SpeakeasyBase {
    headers: PutMetricPolicyHeaders;
    request: shared.PutMetricPolicyInput;
}
export declare class PutMetricPolicyResponse extends SpeakeasyBase {
    containerInUseException?: any;
    containerNotFoundException?: any;
    contentType: string;
    internalServerError?: any;
    putMetricPolicyOutput?: Map<string, any>;
    statusCode: number;
}
