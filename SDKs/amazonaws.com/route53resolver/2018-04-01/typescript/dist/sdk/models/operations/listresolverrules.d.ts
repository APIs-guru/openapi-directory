import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListResolverRulesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListResolverRulesXAmzTargetEnum {
    Route53ResolverListResolverRules = "Route53Resolver.ListResolverRules"
}
export declare class ListResolverRulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListResolverRulesXAmzTargetEnum;
}
export declare class ListResolverRulesRequest extends SpeakeasyBase {
    queryParams: ListResolverRulesQueryParams;
    headers: ListResolverRulesHeaders;
    request: shared.ListResolverRulesRequest;
}
export declare class ListResolverRulesResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceErrorException?: any;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    listResolverRulesResponse?: shared.ListResolverRulesResponse;
    statusCode: number;
    throttlingException?: any;
}
