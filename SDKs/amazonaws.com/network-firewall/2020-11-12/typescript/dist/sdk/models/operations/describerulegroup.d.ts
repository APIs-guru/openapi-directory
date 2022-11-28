import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeRuleGroupXAmzTargetEnum {
    NetworkFirewall20201112DescribeRuleGroup = "NetworkFirewall_20201112.DescribeRuleGroup"
}
export declare class DescribeRuleGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRuleGroupXAmzTargetEnum;
}
export declare class DescribeRuleGroupRequest extends SpeakeasyBase {
    headers: DescribeRuleGroupHeaders;
    request: shared.DescribeRuleGroupRequest;
}
export declare class DescribeRuleGroupResponse extends SpeakeasyBase {
    contentType: string;
    describeRuleGroupResponse?: shared.DescribeRuleGroupResponse;
    internalServerError?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
