import { SpeakeasyBase } from "../../../internal/utils";
import { Event } from "./event";
/**
 * An Activity resource is a combined view of multiple events. An activity has a list of individual events and a combined view of the common fields among all events.
**/
export declare class Activity extends SpeakeasyBase {
    combinedEvent?: Event;
    singleEvents?: Event[];
}
