import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigModel } from "./configmodel";
import { EnvironmentModel } from "./environmentmodel";
import { IntegrationLinkModel } from "./integrationlinkmodel";
import { RolloutPercentageItemModel } from "./rolloutpercentageitemmodel";
import { RolloutRuleModel } from "./rolloutrulemodel";
import { SettingDataModel } from "./settingdatamodel";
import { SettingTagModel } from "./settingtagmodel";
export declare class SettingValueModel extends SpeakeasyBase {
    config?: ConfigModel;
    environment?: EnvironmentModel;
    integrationLinks?: IntegrationLinkModel[];
    lastUpdaterUserEmail?: string;
    lastUpdaterUserFullName?: string;
    readOnly?: boolean;
    rolloutPercentageItems?: RolloutPercentageItemModel[];
    rolloutRules?: RolloutRuleModel[];
    setting?: SettingDataModel;
    settingTags?: SettingTagModel[];
    updatedAt?: Date;
    value?: Map<string, any>;
}
