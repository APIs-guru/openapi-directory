import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointItemResponse } from "./endpointitemresponse";
import { EventItemResponse } from "./eventitemresponse";



// ItemResponse
/** 
 * Provides information about the results of a request to create or update an endpoint that's associated with an event.
**/
export class ItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointItemResponse" })
  endpointItemResponse?: EndpointItemResponse;

  @SpeakeasyMetadata({ data: "json, name=EventsItemResponse", elemType: EventItemResponse })
  eventsItemResponse?: Map<string, EventItemResponse>;
}
