import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Pagination information returned by a List operation when token pagination is enabled. List operations that supports paging return only one "page" of results. This protocol buffer message describes the page that has been returned. When using token pagination, clients should use the next/previous token to get another page of the result. The presence or absence of next/previous token indicates whether a next/previous page is available and provides a mean of accessing this page. ListRequest.page_token should be set to either next_page_token or previous_page_token to access another page.
**/
export declare class TokenPagination extends SpeakeasyBase {
    nextPageToken?: string;
    previousPageToken?: string;
}
