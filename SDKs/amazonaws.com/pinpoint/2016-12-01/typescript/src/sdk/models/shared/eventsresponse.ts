import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ItemResponse } from "./itemresponse";


// EventsResponse
/** 
 * Provides information about endpoints and the events that they're associated with.
**/
export class EventsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Results", elemType: shared.ItemResponse })
  results?: Map<string, ItemResponse>;
}
