import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateFirewallDomainsXAmzTargetEnum {
    Route53ResolverUpdateFirewallDomains = "Route53Resolver.UpdateFirewallDomains"
}
export declare class UpdateFirewallDomainsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateFirewallDomainsXAmzTargetEnum;
}
export declare class UpdateFirewallDomainsRequest extends SpeakeasyBase {
    headers: UpdateFirewallDomainsHeaders;
    request: shared.UpdateFirewallDomainsRequest;
}
export declare class UpdateFirewallDomainsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServiceErrorException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateFirewallDomainsResponse?: shared.UpdateFirewallDomainsResponse;
    validationException?: any;
}
