import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class DescribeJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Request to describe Job log filters.
**/
export declare class DescribeJobsRequestBodyFilters extends SpeakeasyBase {
    fromDate?: string;
    jobIDs?: string[];
    toDate?: string;
}
export declare class DescribeJobsRequestBody extends SpeakeasyBase {
    filters: DescribeJobsRequestBodyFilters;
    maxResults?: number;
    nextToken?: string;
}
export declare class DescribeJobsRequest extends SpeakeasyBase {
    queryParams: DescribeJobsQueryParams;
    headers: DescribeJobsHeaders;
    request: DescribeJobsRequestBody;
}
export declare class DescribeJobsResponse extends SpeakeasyBase {
    contentType: string;
    describeJobsResponse?: shared.DescribeJobsResponse;
    statusCode: number;
    uninitializedAccountException?: any;
    validationException?: any;
}
