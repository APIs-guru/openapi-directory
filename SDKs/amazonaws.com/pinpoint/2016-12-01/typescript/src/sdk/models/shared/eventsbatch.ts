import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PublicEndpoint } from "./publicendpoint";
import { Event } from "./event";


// EventsBatch
/** 
 * Specifies a batch of endpoints and events to process.
**/
export class EventsBatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=Endpoint" })
  endpoint: PublicEndpoint;

  @Metadata({ data: "json, name=Events", elemType: shared.Event })
  events: Map<string, Event>;
}
