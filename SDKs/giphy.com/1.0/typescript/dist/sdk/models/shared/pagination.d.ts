import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions.
 *
**/
export declare class Pagination extends SpeakeasyBase {
    count?: number;
    offset?: number;
    totalCount?: number;
}
