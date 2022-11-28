import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeResourcePolicyXAmzTargetEnum {
    NetworkFirewall20201112DescribeResourcePolicy = "NetworkFirewall_20201112.DescribeResourcePolicy"
}
export declare class DescribeResourcePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeResourcePolicyXAmzTargetEnum;
}
export declare class DescribeResourcePolicyRequest extends SpeakeasyBase {
    headers: DescribeResourcePolicyHeaders;
    request: shared.DescribeResourcePolicyRequest;
}
export declare class DescribeResourcePolicyResponse extends SpeakeasyBase {
    contentType: string;
    describeResourcePolicyResponse?: shared.DescribeResourcePolicyResponse;
    internalServerError?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
