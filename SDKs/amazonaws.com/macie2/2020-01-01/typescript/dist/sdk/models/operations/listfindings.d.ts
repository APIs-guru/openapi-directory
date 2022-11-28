import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListFindingsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListFindingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
**/
export declare class ListFindingsRequestBodyFindingCriteria extends SpeakeasyBase {
    criterion?: Map<string, shared.CriterionAdditionalProperties>;
}
/**
 * Specifies criteria for sorting the results of a request for findings.
**/
export declare class ListFindingsRequestBodySortCriteria extends SpeakeasyBase {
    attributeName?: string;
    orderBy?: shared.OrderByEnum;
}
export declare class ListFindingsRequestBody extends SpeakeasyBase {
    findingCriteria?: ListFindingsRequestBodyFindingCriteria;
    maxResults?: number;
    nextToken?: string;
    sortCriteria?: ListFindingsRequestBodySortCriteria;
}
export declare class ListFindingsRequest extends SpeakeasyBase {
    queryParams: ListFindingsQueryParams;
    headers: ListFindingsHeaders;
    request: ListFindingsRequestBody;
}
export declare class ListFindingsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    listFindingsResponse?: shared.ListFindingsResponse;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
