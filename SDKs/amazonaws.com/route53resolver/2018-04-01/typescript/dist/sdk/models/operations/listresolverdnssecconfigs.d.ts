import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListResolverDnssecConfigsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListResolverDnssecConfigsXAmzTargetEnum {
    Route53ResolverListResolverDnssecConfigs = "Route53Resolver.ListResolverDnssecConfigs"
}
export declare class ListResolverDnssecConfigsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListResolverDnssecConfigsXAmzTargetEnum;
}
export declare class ListResolverDnssecConfigsRequest extends SpeakeasyBase {
    queryParams: ListResolverDnssecConfigsQueryParams;
    headers: ListResolverDnssecConfigsHeaders;
    request: shared.ListResolverDnssecConfigsRequest;
}
export declare class ListResolverDnssecConfigsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServiceErrorException?: any;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    listResolverDnssecConfigsResponse?: shared.ListResolverDnssecConfigsResponse;
    statusCode: number;
    throttlingException?: any;
}
