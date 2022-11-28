import { SpeakeasyBase } from "../../../internal/utils";
import { ItemResponse } from "./itemresponse";
/**
 * Provides information about endpoints and the events that they're associated with.
**/
export declare class EventsResponse extends SpeakeasyBase {
    results?: Map<string, ItemResponse>;
}
