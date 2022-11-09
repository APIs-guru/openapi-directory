import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EventDimensions } from "./eventdimensions";


// EventCondition
/** 
 * Specifies the conditions to evaluate for an event that applies to an activity in a journey.
**/
export class EventCondition extends SpeakeasyBase {
  @Metadata({ data: "json, name=Dimensions" })
  dimensions?: EventDimensions;

  @Metadata({ data: "json, name=MessageActivity" })
  messageActivity?: string;
}
