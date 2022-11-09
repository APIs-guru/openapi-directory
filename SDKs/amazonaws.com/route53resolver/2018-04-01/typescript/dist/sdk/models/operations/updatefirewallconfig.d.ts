import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateFirewallConfigXAmzTargetEnum {
    Route53ResolverUpdateFirewallConfig = "Route53Resolver.UpdateFirewallConfig"
}
export declare class UpdateFirewallConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateFirewallConfigXAmzTargetEnum;
}
export declare class UpdateFirewallConfigRequest extends SpeakeasyBase {
    headers: UpdateFirewallConfigHeaders;
    request: shared.UpdateFirewallConfigRequest;
}
export declare class UpdateFirewallConfigResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServiceErrorException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateFirewallConfigResponse?: shared.UpdateFirewallConfigResponse;
    validationException?: any;
}
