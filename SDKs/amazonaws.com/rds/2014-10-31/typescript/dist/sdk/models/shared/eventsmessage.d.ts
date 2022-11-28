import { SpeakeasyBase } from "../../../internal/utils";
import { Event } from "./event";
/**
 *  Contains the result of a successful invocation of the <code>DescribeEvents</code> action.
**/
export declare class EventsMessage extends SpeakeasyBase {
    events?: Event[];
    marker?: string;
}
