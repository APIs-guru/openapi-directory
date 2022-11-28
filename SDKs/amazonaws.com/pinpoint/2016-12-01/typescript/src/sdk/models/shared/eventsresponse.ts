import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ItemResponse } from "./itemresponse";



// EventsResponse
/** 
 * Provides information about endpoints and the events that they're associated with.
**/
export class EventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Results", elemType: ItemResponse })
  results?: Map<string, ItemResponse>;
}
