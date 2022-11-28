import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventType } from "./eventtype";



// EventTypeList
/** 
 * List of event types
**/
export class EventTypeList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: EventType })
  items: EventType[];
}
