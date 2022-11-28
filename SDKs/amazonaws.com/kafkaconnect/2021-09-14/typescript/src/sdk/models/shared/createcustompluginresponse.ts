import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomPluginStateEnum } from "./custompluginstateenum";



export class CreateCustomPluginResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customPluginArn" })
  customPluginArn?: string;

  @SpeakeasyMetadata({ data: "json, name=customPluginState" })
  customPluginState?: CustomPluginStateEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: number;
}
