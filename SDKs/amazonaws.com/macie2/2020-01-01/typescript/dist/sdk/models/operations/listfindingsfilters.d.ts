import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListFindingsFiltersQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListFindingsFiltersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListFindingsFiltersRequest extends SpeakeasyBase {
    queryParams: ListFindingsFiltersQueryParams;
    headers: ListFindingsFiltersHeaders;
}
export declare class ListFindingsFiltersResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    listFindingsFiltersResponse?: shared.ListFindingsFiltersResponse;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
