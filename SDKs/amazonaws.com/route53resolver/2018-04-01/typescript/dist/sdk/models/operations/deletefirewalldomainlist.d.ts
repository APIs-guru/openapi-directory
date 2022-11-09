import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteFirewallDomainListXAmzTargetEnum {
    Route53ResolverDeleteFirewallDomainList = "Route53Resolver.DeleteFirewallDomainList"
}
export declare class DeleteFirewallDomainListHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteFirewallDomainListXAmzTargetEnum;
}
export declare class DeleteFirewallDomainListRequest extends SpeakeasyBase {
    headers: DeleteFirewallDomainListHeaders;
    request: shared.DeleteFirewallDomainListRequest;
}
export declare class DeleteFirewallDomainListResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    deleteFirewallDomainListResponse?: shared.DeleteFirewallDomainListResponse;
    internalServiceErrorException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
