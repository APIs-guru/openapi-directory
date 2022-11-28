import { SpeakeasyBase } from "../../../internal/utils";
import { EventItem } from "./eventitem";
/**
 * The result set for the event item search.
**/
export declare class EventItemSearchResponse extends SpeakeasyBase {
    eventItems?: EventItem[];
    href?: string;
    limit?: number;
    next?: string;
    offset?: number;
    prev?: string;
    total?: number;
}
