import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Event } from "./event";



// EventsMessage
/** 
 *  Contains the result of a successful invocation of the <code>DescribeEvents</code> action. 
**/
export class EventsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Event })
  events?: Event[];

  @SpeakeasyMetadata()
  marker?: string;
}
