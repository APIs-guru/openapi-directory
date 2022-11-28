import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssociateFirewallPolicyXAmzTargetEnum {
    NetworkFirewall20201112AssociateFirewallPolicy = "NetworkFirewall_20201112.AssociateFirewallPolicy"
}
export declare class AssociateFirewallPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateFirewallPolicyXAmzTargetEnum;
}
export declare class AssociateFirewallPolicyRequest extends SpeakeasyBase {
    headers: AssociateFirewallPolicyHeaders;
    request: shared.AssociateFirewallPolicyRequest;
}
export declare class AssociateFirewallPolicyResponse extends SpeakeasyBase {
    associateFirewallPolicyResponse?: shared.AssociateFirewallPolicyResponse;
    contentType: string;
    internalServerError?: any;
    invalidOperationException?: any;
    invalidRequestException?: any;
    invalidTokenException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
