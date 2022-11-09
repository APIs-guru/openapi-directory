import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ImportFirewallDomainsXAmzTargetEnum {
    Route53ResolverImportFirewallDomains = "Route53Resolver.ImportFirewallDomains"
}
export declare class ImportFirewallDomainsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ImportFirewallDomainsXAmzTargetEnum;
}
export declare class ImportFirewallDomainsRequest extends SpeakeasyBase {
    headers: ImportFirewallDomainsHeaders;
    request: shared.ImportFirewallDomainsRequest;
}
export declare class ImportFirewallDomainsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    importFirewallDomainsResponse?: shared.ImportFirewallDomainsResponse;
    internalServiceErrorException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
