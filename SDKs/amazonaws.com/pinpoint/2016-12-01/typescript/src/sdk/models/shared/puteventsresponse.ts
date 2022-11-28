import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventsResponse } from "./eventsresponse";



export class PutEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventsResponse" })
  eventsResponse: EventsResponse;
}
