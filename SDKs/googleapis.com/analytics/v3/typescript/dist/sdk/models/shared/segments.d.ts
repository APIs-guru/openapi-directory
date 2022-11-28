import { SpeakeasyBase } from "../../../internal/utils";
import { Segment } from "./segment";
/**
 * An segment collection lists Analytics segments that the user has access to. Each resource in the collection corresponds to a single Analytics segment.
**/
export declare class Segments extends SpeakeasyBase {
    items?: Segment[];
    itemsPerPage?: number;
    kind?: string;
    nextLink?: string;
    previousLink?: string;
    startIndex?: number;
    totalResults?: number;
    username?: string;
}
