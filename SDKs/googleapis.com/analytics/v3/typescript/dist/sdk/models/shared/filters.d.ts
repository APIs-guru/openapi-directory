import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
/**
 * A filter collection lists filters created by users in an Analytics account. Each resource in the collection corresponds to a filter.
**/
export declare class Filters extends SpeakeasyBase {
    items?: Filter[];
    itemsPerPage?: number;
    kind?: string;
    nextLink?: string;
    previousLink?: string;
    startIndex?: number;
    totalResults?: number;
    username?: string;
}
