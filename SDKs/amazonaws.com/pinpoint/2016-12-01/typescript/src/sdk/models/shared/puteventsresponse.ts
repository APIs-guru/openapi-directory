import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EventsResponse } from "./eventsresponse";


export class PutEventsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventsResponse" })
  eventsResponse: EventsResponse;
}
