import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateFirewallDomainListXAmzTargetEnum {
    Route53ResolverCreateFirewallDomainList = "Route53Resolver.CreateFirewallDomainList"
}
export declare class CreateFirewallDomainListHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateFirewallDomainListXAmzTargetEnum;
}
export declare class CreateFirewallDomainListRequest extends SpeakeasyBase {
    headers: CreateFirewallDomainListHeaders;
    request: shared.CreateFirewallDomainListRequest;
}
export declare class CreateFirewallDomainListResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createFirewallDomainListResponse?: shared.CreateFirewallDomainListResponse;
    internalServiceErrorException?: any;
    limitExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
