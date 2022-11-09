import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomPluginStateEnum } from "./custompluginstateenum";


export class CreateCustomPluginResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=customPluginArn" })
  customPluginArn?: string;

  @Metadata({ data: "json, name=customPluginState" })
  customPluginState?: CustomPluginStateEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=revision" })
  revision?: number;
}
