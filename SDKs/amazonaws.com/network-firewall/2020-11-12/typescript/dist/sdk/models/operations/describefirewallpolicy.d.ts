import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeFirewallPolicyXAmzTargetEnum {
    NetworkFirewall20201112DescribeFirewallPolicy = "NetworkFirewall_20201112.DescribeFirewallPolicy"
}
export declare class DescribeFirewallPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFirewallPolicyXAmzTargetEnum;
}
export declare class DescribeFirewallPolicyRequest extends SpeakeasyBase {
    headers: DescribeFirewallPolicyHeaders;
    request: shared.DescribeFirewallPolicyRequest;
}
export declare class DescribeFirewallPolicyResponse extends SpeakeasyBase {
    contentType: string;
    describeFirewallPolicyResponse?: shared.DescribeFirewallPolicyResponse;
    internalServerError?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
