import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetFirewallDomainListXAmzTargetEnum {
    Route53ResolverGetFirewallDomainList = "Route53Resolver.GetFirewallDomainList"
}
export declare class GetFirewallDomainListHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetFirewallDomainListXAmzTargetEnum;
}
export declare class GetFirewallDomainListRequest extends SpeakeasyBase {
    headers: GetFirewallDomainListHeaders;
    request: shared.GetFirewallDomainListRequest;
}
export declare class GetFirewallDomainListResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getFirewallDomainListResponse?: shared.GetFirewallDomainListResponse;
    internalServiceErrorException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
