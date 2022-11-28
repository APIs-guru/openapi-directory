import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetFirewallConfigXAmzTargetEnum {
    Route53ResolverGetFirewallConfig = "Route53Resolver.GetFirewallConfig"
}
export declare class GetFirewallConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetFirewallConfigXAmzTargetEnum;
}
export declare class GetFirewallConfigRequest extends SpeakeasyBase {
    headers: GetFirewallConfigHeaders;
    request: shared.GetFirewallConfigRequest;
}
export declare class GetFirewallConfigResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getFirewallConfigResponse?: shared.GetFirewallConfigResponse;
    internalServiceErrorException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
