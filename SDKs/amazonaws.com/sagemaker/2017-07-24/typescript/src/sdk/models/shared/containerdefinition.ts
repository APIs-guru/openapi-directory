import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageConfig } from "./imageconfig";
import { ContainerModeEnum } from "./containermodeenum";
import { MultiModelConfig } from "./multimodelconfig";



// ContainerDefinition
/** 
 * Describes the container, as part of model definition.
**/
export class ContainerDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContainerHostname" })
  containerHostname?: string;

  @SpeakeasyMetadata({ data: "json, name=Environment" })
  environment?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageConfig" })
  imageConfig?: ImageConfig;

  @SpeakeasyMetadata({ data: "json, name=Mode" })
  mode?: ContainerModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ModelDataUrl" })
  modelDataUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelPackageName" })
  modelPackageName?: string;

  @SpeakeasyMetadata({ data: "json, name=MultiModelConfig" })
  multiModelConfig?: MultiModelConfig;
}
