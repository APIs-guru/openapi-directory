import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConfigModel } from "./configmodel";
import { EnvironmentModel } from "./environmentmodel";
import { ConfigSettingValueModel } from "./configsettingvaluemodel";


export class ConfigSettingValuesModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: ConfigModel;

  @Metadata({ data: "json, name=environment" })
  environment?: EnvironmentModel;

  @Metadata({ data: "json, name=readOnly" })
  readOnly?: boolean;

  @Metadata({ data: "json, name=settingValues", elemType: shared.ConfigSettingValueModel })
  settingValues?: ConfigSettingValueModel[];
}
