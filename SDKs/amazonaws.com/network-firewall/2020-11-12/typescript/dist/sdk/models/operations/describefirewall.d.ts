import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeFirewallXAmzTargetEnum {
    NetworkFirewall20201112DescribeFirewall = "NetworkFirewall_20201112.DescribeFirewall"
}
export declare class DescribeFirewallHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFirewallXAmzTargetEnum;
}
export declare class DescribeFirewallRequest extends SpeakeasyBase {
    headers: DescribeFirewallHeaders;
    request: shared.DescribeFirewallRequest;
}
export declare class DescribeFirewallResponse extends SpeakeasyBase {
    contentType: string;
    describeFirewallResponse?: shared.DescribeFirewallResponse;
    internalServerError?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
