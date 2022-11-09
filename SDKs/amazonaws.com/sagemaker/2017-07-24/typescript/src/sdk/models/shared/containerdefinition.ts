import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageConfig } from "./imageconfig";
import { ContainerModeEnum } from "./containermodeenum";
import { MultiModelConfig } from "./multimodelconfig";


// ContainerDefinition
/** 
 * Describes the container, as part of model definition.
**/
export class ContainerDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContainerHostname" })
  containerHostname?: string;

  @Metadata({ data: "json, name=Environment" })
  environment?: Map<string, string>;

  @Metadata({ data: "json, name=Image" })
  image?: string;

  @Metadata({ data: "json, name=ImageConfig" })
  imageConfig?: ImageConfig;

  @Metadata({ data: "json, name=Mode" })
  mode?: ContainerModeEnum;

  @Metadata({ data: "json, name=ModelDataUrl" })
  modelDataUrl?: string;

  @Metadata({ data: "json, name=ModelPackageName" })
  modelPackageName?: string;

  @Metadata({ data: "json, name=MultiModelConfig" })
  multiModelConfig?: MultiModelConfig;
}
