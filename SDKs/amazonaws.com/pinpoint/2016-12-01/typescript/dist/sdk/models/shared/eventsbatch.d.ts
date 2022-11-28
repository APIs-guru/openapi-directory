import { SpeakeasyBase } from "../../../internal/utils";
import { PublicEndpoint } from "./publicendpoint";
import { Event } from "./event";
/**
 * Specifies a batch of endpoints and events to process.
**/
export declare class EventsBatch extends SpeakeasyBase {
    endpoint: PublicEndpoint;
    events: Map<string, Event>;
}
