import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateFirewallDescriptionXAmzTargetEnum {
    NetworkFirewall20201112UpdateFirewallDescription = "NetworkFirewall_20201112.UpdateFirewallDescription"
}
export declare class UpdateFirewallDescriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateFirewallDescriptionXAmzTargetEnum;
}
export declare class UpdateFirewallDescriptionRequest extends SpeakeasyBase {
    headers: UpdateFirewallDescriptionHeaders;
    request: shared.UpdateFirewallDescriptionRequest;
}
export declare class UpdateFirewallDescriptionResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidRequestException?: any;
    invalidTokenException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateFirewallDescriptionResponse?: shared.UpdateFirewallDescriptionResponse;
}
