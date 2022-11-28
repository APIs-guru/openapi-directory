import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateFirewallPolicyXAmzTargetEnum {
    NetworkFirewall20201112UpdateFirewallPolicy = "NetworkFirewall_20201112.UpdateFirewallPolicy"
}
export declare class UpdateFirewallPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateFirewallPolicyXAmzTargetEnum;
}
export declare class UpdateFirewallPolicyRequest extends SpeakeasyBase {
    headers: UpdateFirewallPolicyHeaders;
    request: shared.UpdateFirewallPolicyRequest;
}
export declare class UpdateFirewallPolicyResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidRequestException?: any;
    invalidTokenException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateFirewallPolicyResponse?: shared.UpdateFirewallPolicyResponse;
}
