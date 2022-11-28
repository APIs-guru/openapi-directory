import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateFirewallPolicyChangeProtectionXAmzTargetEnum {
    NetworkFirewall20201112UpdateFirewallPolicyChangeProtection = "NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection"
}
export declare class UpdateFirewallPolicyChangeProtectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateFirewallPolicyChangeProtectionXAmzTargetEnum;
}
export declare class UpdateFirewallPolicyChangeProtectionRequest extends SpeakeasyBase {
    headers: UpdateFirewallPolicyChangeProtectionHeaders;
    request: shared.UpdateFirewallPolicyChangeProtectionRequest;
}
export declare class UpdateFirewallPolicyChangeProtectionResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidRequestException?: any;
    invalidTokenException?: any;
    resourceNotFoundException?: any;
    resourceOwnerCheckException?: any;
    statusCode: number;
    throttlingException?: any;
    updateFirewallPolicyChangeProtectionResponse?: shared.UpdateFirewallPolicyChangeProtectionResponse;
}
