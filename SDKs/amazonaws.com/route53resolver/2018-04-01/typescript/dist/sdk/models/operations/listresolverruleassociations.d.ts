import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListResolverRuleAssociationsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListResolverRuleAssociationsXAmzTargetEnum {
    Route53ResolverListResolverRuleAssociations = "Route53Resolver.ListResolverRuleAssociations"
}
export declare class ListResolverRuleAssociationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListResolverRuleAssociationsXAmzTargetEnum;
}
export declare class ListResolverRuleAssociationsRequest extends SpeakeasyBase {
    queryParams: ListResolverRuleAssociationsQueryParams;
    headers: ListResolverRuleAssociationsHeaders;
    request: shared.ListResolverRuleAssociationsRequest;
}
export declare class ListResolverRuleAssociationsResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceErrorException?: any;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    listResolverRuleAssociationsResponse?: shared.ListResolverRuleAssociationsResponse;
    statusCode: number;
    throttlingException?: any;
}
