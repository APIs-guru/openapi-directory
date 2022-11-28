import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Event } from "./event";



// EventsMessage
/** 
 * <p/>
**/
export class EventsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Event })
  events?: Event[];

  @SpeakeasyMetadata()
  marker?: string;
}
