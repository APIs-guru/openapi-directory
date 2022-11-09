import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListEntitiesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListEntitiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>.
**/
export declare class ListEntitiesRequestBodySort extends SpeakeasyBase {
    sortBy?: string;
    sortOrder?: shared.SortOrderEnum;
}
export declare class ListEntitiesRequestBody extends SpeakeasyBase {
    catalog: string;
    entityType: string;
    filterList?: shared.Filter[];
    maxResults?: number;
    nextToken?: string;
    sort?: ListEntitiesRequestBodySort;
}
export declare class ListEntitiesRequest extends SpeakeasyBase {
    queryParams: ListEntitiesQueryParams;
    headers: ListEntitiesHeaders;
    request: ListEntitiesRequestBody;
}
export declare class ListEntitiesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServiceException?: any;
    listEntitiesResponse?: shared.ListEntitiesResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
