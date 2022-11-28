import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointItemResponse } from "./endpointitemresponse";
import { EventItemResponse } from "./eventitemresponse";
/**
 * Provides information about the results of a request to create or update an endpoint that's associated with an event.
**/
export declare class ItemResponse extends SpeakeasyBase {
    endpointItemResponse?: EndpointItemResponse;
    eventsItemResponse?: Map<string, EventItemResponse>;
}
