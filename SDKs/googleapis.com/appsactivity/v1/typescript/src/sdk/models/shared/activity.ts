import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Event } from "./event";



// Activity
/** 
 * An Activity resource is a combined view of multiple events. An activity has a list of individual events and a combined view of the common fields among all events.
**/
export class Activity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=combinedEvent" })
  combinedEvent?: Event;

  @SpeakeasyMetadata({ data: "json, name=singleEvents", elemType: Event })
  singleEvents?: Event[];
}
