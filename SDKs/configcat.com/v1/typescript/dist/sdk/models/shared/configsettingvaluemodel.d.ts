import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IntegrationLinkModel } from "./integrationlinkmodel";
import { RolloutPercentageItemModel } from "./rolloutpercentageitemmodel";
import { RolloutRuleModel } from "./rolloutrulemodel";
import { SettingDataModel } from "./settingdatamodel";
import { SettingTagModel } from "./settingtagmodel";
export declare class ConfigSettingValueModel extends SpeakeasyBase {
    integrationLinks?: IntegrationLinkModel[];
    lastUpdaterUserEmail?: string;
    lastUpdaterUserFullName?: string;
    rolloutPercentageItems?: RolloutPercentageItemModel[];
    rolloutRules?: RolloutRuleModel[];
    setting?: SettingDataModel;
    settingTags?: SettingTagModel[];
    updatedAt?: Date;
    value?: Map<string, any>;
}
