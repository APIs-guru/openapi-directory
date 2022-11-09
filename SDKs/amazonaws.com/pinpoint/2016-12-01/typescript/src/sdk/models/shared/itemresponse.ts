import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EndpointItemResponse } from "./endpointitemresponse";
import { EventItemResponse } from "./eventitemresponse";


// ItemResponse
/** 
 * Provides information about the results of a request to create or update an endpoint that's associated with an event.
**/
export class ItemResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointItemResponse" })
  endpointItemResponse?: EndpointItemResponse;

  @Metadata({ data: "json, name=EventsItemResponse", elemType: shared.EventItemResponse })
  eventsItemResponse?: Map<string, EventItemResponse>;
}
