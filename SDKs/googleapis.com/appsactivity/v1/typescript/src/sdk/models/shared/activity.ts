import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Event } from "./event";
import { Event } from "./event";


// Activity
/** 
 * An Activity resource is a combined view of multiple events. An activity has a list of individual events and a combined view of the common fields among all events.
**/
export class Activity extends SpeakeasyBase {
  @Metadata({ data: "json, name=combinedEvent" })
  combinedEvent?: Event;

  @Metadata({ data: "json, name=singleEvents", elemType: shared.Event })
  singleEvents?: Event[];
}
