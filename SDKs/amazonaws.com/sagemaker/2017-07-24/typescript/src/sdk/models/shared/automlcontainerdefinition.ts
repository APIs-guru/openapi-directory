import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AutoMlContainerDefinition
/** 
 * A list of container definitions that describe the different containers that make up an AutoML candidate. For more information, see .
**/
export class AutoMlContainerDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Environment" })
  environment?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Image" })
  image: string;

  @SpeakeasyMetadata({ data: "json, name=ModelDataUrl" })
  modelDataUrl: string;
}
