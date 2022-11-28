import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListChangeSetsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListChangeSetsHeaders extends SpeakeasyBase {
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
export declare class ListChangeSetsRequestBodySort extends SpeakeasyBase {
    sortBy?: string;
    sortOrder?: shared.SortOrderEnum;
}
export declare class ListChangeSetsRequestBody extends SpeakeasyBase {
    catalog: string;
    filterList?: shared.Filter[];
    maxResults?: number;
    nextToken?: string;
    sort?: ListChangeSetsRequestBodySort;
}
export declare class ListChangeSetsRequest extends SpeakeasyBase {
    queryParams: ListChangeSetsQueryParams;
    headers: ListChangeSetsHeaders;
    request: ListChangeSetsRequestBody;
}
export declare class ListChangeSetsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServiceException?: any;
    listChangeSetsResponse?: shared.ListChangeSetsResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
