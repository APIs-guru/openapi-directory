import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateFirewallPolicyXAmzTargetEnum {
    NetworkFirewall20201112CreateFirewallPolicy = "NetworkFirewall_20201112.CreateFirewallPolicy"
}
export declare class CreateFirewallPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateFirewallPolicyXAmzTargetEnum;
}
export declare class CreateFirewallPolicyRequest extends SpeakeasyBase {
    headers: CreateFirewallPolicyHeaders;
    request: shared.CreateFirewallPolicyRequest;
}
export declare class CreateFirewallPolicyResponse extends SpeakeasyBase {
    contentType: string;
    createFirewallPolicyResponse?: shared.CreateFirewallPolicyResponse;
    insufficientCapacityException?: any;
    internalServerError?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    statusCode: number;
    throttlingException?: any;
}
