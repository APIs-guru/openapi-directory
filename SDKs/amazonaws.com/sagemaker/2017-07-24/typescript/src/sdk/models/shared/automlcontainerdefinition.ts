import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AutoMlContainerDefinition
/** 
 * A list of container definitions that describe the different containers that make up an AutoML candidate. For more information, see .
**/
export class AutoMlContainerDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=Environment" })
  environment?: Map<string, string>;

  @Metadata({ data: "json, name=Image" })
  image: string;

  @Metadata({ data: "json, name=ModelDataUrl" })
  modelDataUrl: string;
}
