import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventType } from "./eventtype";


// EventTypeList
/** 
 * List of event types
**/
export class EventTypeList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.EventType })
  items: EventType[];
}
