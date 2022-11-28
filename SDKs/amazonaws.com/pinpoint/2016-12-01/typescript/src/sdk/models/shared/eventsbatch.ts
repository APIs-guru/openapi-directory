import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublicEndpoint } from "./publicendpoint";
import { Event } from "./event";



// EventsBatch
/** 
 * Specifies a batch of endpoints and events to process.
**/
export class EventsBatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Endpoint" })
  endpoint: PublicEndpoint;

  @SpeakeasyMetadata({ data: "json, name=Events", elemType: Event })
  events: Map<string, Event>;
}
