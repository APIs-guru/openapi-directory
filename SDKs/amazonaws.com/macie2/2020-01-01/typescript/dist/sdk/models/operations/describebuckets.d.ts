import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeBucketsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class DescribeBucketsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies criteria for sorting the results of a query for information about S3 buckets.
**/
export declare class DescribeBucketsRequestBodySortCriteria extends SpeakeasyBase {
    attributeName?: string;
    orderBy?: shared.OrderByEnum;
}
export declare class DescribeBucketsRequestBody extends SpeakeasyBase {
    criteria?: Map<string, shared.BucketCriteriaAdditionalProperties>;
    maxResults?: number;
    nextToken?: string;
    sortCriteria?: DescribeBucketsRequestBodySortCriteria;
}
export declare class DescribeBucketsRequest extends SpeakeasyBase {
    queryParams: DescribeBucketsQueryParams;
    headers: DescribeBucketsHeaders;
    request: DescribeBucketsRequestBody;
}
export declare class DescribeBucketsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    describeBucketsResponse?: shared.DescribeBucketsResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
