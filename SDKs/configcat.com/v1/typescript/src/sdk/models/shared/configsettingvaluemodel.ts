import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IntegrationLinkModel } from "./integrationlinkmodel";
import { RolloutPercentageItemModel } from "./rolloutpercentageitemmodel";
import { RolloutRuleModel } from "./rolloutrulemodel";
import { SettingDataModel } from "./settingdatamodel";
import { SettingTagModel } from "./settingtagmodel";


export class ConfigSettingValueModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=integrationLinks", elemType: shared.IntegrationLinkModel })
  integrationLinks?: IntegrationLinkModel[];

  @Metadata({ data: "json, name=lastUpdaterUserEmail" })
  lastUpdaterUserEmail?: string;

  @Metadata({ data: "json, name=lastUpdaterUserFullName" })
  lastUpdaterUserFullName?: string;

  @Metadata({ data: "json, name=rolloutPercentageItems", elemType: shared.RolloutPercentageItemModel })
  rolloutPercentageItems?: RolloutPercentageItemModel[];

  @Metadata({ data: "json, name=rolloutRules", elemType: shared.RolloutRuleModel })
  rolloutRules?: RolloutRuleModel[];

  @Metadata({ data: "json, name=setting" })
  setting?: SettingDataModel;

  @Metadata({ data: "json, name=settingTags", elemType: shared.SettingTagModel })
  settingTags?: SettingTagModel[];

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=value" })
  value?: Map<string, any>;
}
