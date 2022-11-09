import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigModel } from "./configmodel";
import { EnvironmentModel } from "./environmentmodel";
import { ConfigSettingValueModel } from "./configsettingvaluemodel";
export declare class ConfigSettingValuesModel extends SpeakeasyBase {
    config?: ConfigModel;
    environment?: EnvironmentModel;
    readOnly?: boolean;
    settingValues?: ConfigSettingValueModel[];
}
