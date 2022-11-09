import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EventTriggerDefinition
/** 
 * The container for the <a>EventTriggerDefinition$EventResourceARN</a>.
**/
export class EventTriggerDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventResourceARN" })
  eventResourceArn?: string;
}
