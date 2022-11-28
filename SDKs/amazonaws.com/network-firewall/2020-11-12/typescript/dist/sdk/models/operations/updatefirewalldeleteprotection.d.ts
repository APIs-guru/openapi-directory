import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateFirewallDeleteProtectionXAmzTargetEnum {
    NetworkFirewall20201112UpdateFirewallDeleteProtection = "NetworkFirewall_20201112.UpdateFirewallDeleteProtection"
}
export declare class UpdateFirewallDeleteProtectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateFirewallDeleteProtectionXAmzTargetEnum;
}
export declare class UpdateFirewallDeleteProtectionRequest extends SpeakeasyBase {
    headers: UpdateFirewallDeleteProtectionHeaders;
    request: shared.UpdateFirewallDeleteProtectionRequest;
}
export declare class UpdateFirewallDeleteProtectionResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidRequestException?: any;
    invalidTokenException?: any;
    resourceNotFoundException?: any;
    resourceOwnerCheckException?: any;
    statusCode: number;
    throttlingException?: any;
    updateFirewallDeleteProtectionResponse?: shared.UpdateFirewallDeleteProtectionResponse;
}
