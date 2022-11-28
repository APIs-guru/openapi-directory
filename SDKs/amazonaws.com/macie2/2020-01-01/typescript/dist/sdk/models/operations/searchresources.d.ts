import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchResourcesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class SearchResourcesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies property- and tag-based conditions that define filter criteria for including or excluding S3 buckets from the query results. Exclude conditions take precedence over include conditions.
**/
export declare class SearchResourcesRequestBodyBucketCriteria extends SpeakeasyBase {
    excludes?: shared.SearchResourcesCriteriaBlock;
    includes?: shared.SearchResourcesCriteriaBlock;
}
/**
 * Specifies criteria for sorting the results of a query for information about Amazon Web Services resources that Amazon Macie monitors and analyzes.
**/
export declare class SearchResourcesRequestBodySortCriteria extends SpeakeasyBase {
    attributeName?: shared.SearchResourcesSortAttributeNameEnum;
    orderBy?: shared.OrderByEnum;
}
export declare class SearchResourcesRequestBody extends SpeakeasyBase {
    bucketCriteria?: SearchResourcesRequestBodyBucketCriteria;
    maxResults?: number;
    nextToken?: string;
    sortCriteria?: SearchResourcesRequestBodySortCriteria;
}
export declare class SearchResourcesRequest extends SpeakeasyBase {
    queryParams: SearchResourcesQueryParams;
    headers: SearchResourcesHeaders;
    request: SearchResourcesRequestBody;
}
export declare class SearchResourcesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    searchResourcesResponse?: shared.SearchResourcesResponse;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
