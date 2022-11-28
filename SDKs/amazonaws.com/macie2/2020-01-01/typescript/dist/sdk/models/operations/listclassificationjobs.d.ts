import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListClassificationJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListClassificationJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies criteria for filtering the results of a request for information about classification jobs.
**/
export declare class ListClassificationJobsRequestBodyFilterCriteria extends SpeakeasyBase {
    excludes?: shared.ListJobsFilterTerm[];
    includes?: shared.ListJobsFilterTerm[];
}
/**
 * Specifies criteria for sorting the results of a request for information about classification jobs.
**/
export declare class ListClassificationJobsRequestBodySortCriteria extends SpeakeasyBase {
    attributeName?: shared.ListJobsSortAttributeNameEnum;
    orderBy?: shared.OrderByEnum;
}
export declare class ListClassificationJobsRequestBody extends SpeakeasyBase {
    filterCriteria?: ListClassificationJobsRequestBodyFilterCriteria;
    maxResults?: number;
    nextToken?: string;
    sortCriteria?: ListClassificationJobsRequestBodySortCriteria;
}
export declare class ListClassificationJobsRequest extends SpeakeasyBase {
    queryParams: ListClassificationJobsQueryParams;
    headers: ListClassificationJobsHeaders;
    request: ListClassificationJobsRequestBody;
}
export declare class ListClassificationJobsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    listClassificationJobsResponse?: shared.ListClassificationJobsResponse;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
