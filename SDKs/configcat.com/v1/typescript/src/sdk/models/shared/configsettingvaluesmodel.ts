import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigModel } from "./configmodel";
import { EnvironmentModel } from "./environmentmodel";
import { ConfigSettingValueModel } from "./configsettingvaluemodel";



export class ConfigSettingValuesModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: ConfigModel;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: EnvironmentModel;

  @SpeakeasyMetadata({ data: "json, name=readOnly" })
  readOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=settingValues", elemType: ConfigSettingValueModel })
  settingValues?: ConfigSettingValueModel[];
}
