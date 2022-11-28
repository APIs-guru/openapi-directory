import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventDimensions } from "./eventdimensions";



// EventCondition
/** 
 * Specifies the conditions to evaluate for an event that applies to an activity in a journey.
**/
export class EventCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Dimensions" })
  dimensions?: EventDimensions;

  @SpeakeasyMetadata({ data: "json, name=MessageActivity" })
  messageActivity?: string;
}
