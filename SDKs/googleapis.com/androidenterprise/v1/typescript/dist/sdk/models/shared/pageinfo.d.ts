import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the current page. List operations that supports paging return only one "page" of results. This protocol buffer message describes the page that has been returned.
**/
export declare class PageInfo extends SpeakeasyBase {
    resultPerPage?: number;
    startIndex?: number;
    totalResults?: number;
}
