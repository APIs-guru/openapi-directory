import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteFirewallPolicyXAmzTargetEnum {
    NetworkFirewall20201112DeleteFirewallPolicy = "NetworkFirewall_20201112.DeleteFirewallPolicy"
}
export declare class DeleteFirewallPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteFirewallPolicyXAmzTargetEnum;
}
export declare class DeleteFirewallPolicyRequest extends SpeakeasyBase {
    headers: DeleteFirewallPolicyHeaders;
    request: shared.DeleteFirewallPolicyRequest;
}
export declare class DeleteFirewallPolicyResponse extends SpeakeasyBase {
    contentType: string;
    deleteFirewallPolicyResponse?: shared.DeleteFirewallPolicyResponse;
    internalServerError?: any;
    invalidOperationException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    unsupportedOperationException?: any;
}
