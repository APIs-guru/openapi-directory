import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventTriggerDefinition } from "./eventtriggerdefinition";


// LambdaResource
/** 
 * Identifies 
**/
export class LambdaResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventTriggers", elemType: shared.EventTriggerDefinition })
  eventTriggers?: EventTriggerDefinition[];

  @Metadata({ data: "json, name=LambdaArn" })
  lambdaArn?: string;
}
