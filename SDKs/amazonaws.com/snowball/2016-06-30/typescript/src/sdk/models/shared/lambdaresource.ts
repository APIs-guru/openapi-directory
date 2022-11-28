import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventTriggerDefinition } from "./eventtriggerdefinition";



// LambdaResource
/** 
 * Identifies 
**/
export class LambdaResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventTriggers", elemType: EventTriggerDefinition })
  eventTriggers?: EventTriggerDefinition[];

  @SpeakeasyMetadata({ data: "json, name=LambdaArn" })
  lambdaArn?: string;
}
