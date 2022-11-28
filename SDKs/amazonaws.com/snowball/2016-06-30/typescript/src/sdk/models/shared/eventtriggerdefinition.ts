import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventTriggerDefinition
/** 
 * The container for the <a>EventTriggerDefinition$EventResourceARN</a>.
**/
export class EventTriggerDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventResourceARN" })
  eventResourceArn?: string;
}
