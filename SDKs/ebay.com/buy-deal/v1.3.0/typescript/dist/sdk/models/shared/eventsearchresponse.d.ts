import { SpeakeasyBase } from "../../../internal/utils";
import { Event } from "./event";
/**
 * The result set for the specified event search criteria.
**/
export declare class EventSearchResponse extends SpeakeasyBase {
    events?: Event[];
    href?: string;
    limit?: number;
    next?: string;
    offset?: number;
    prev?: string;
    total?: number;
}
