import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HumanLoopDataAttributes } from "./humanloopdataattributes";


// HumanLoopConfig
/** 
 * Sets up the human review workflow the document will be sent to if one of the conditions is met. You can also set certain attributes of the image before review. 
**/
export class HumanLoopConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataAttributes" })
  dataAttributes?: HumanLoopDataAttributes;

  @Metadata({ data: "json, name=FlowDefinitionArn" })
  flowDefinitionArn: string;

  @Metadata({ data: "json, name=HumanLoopName" })
  humanLoopName: string;
}
