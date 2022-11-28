import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigModel } from "./configmodel";
import { EnvironmentModel } from "./environmentmodel";
import { IntegrationLinkModel } from "./integrationlinkmodel";
import { RolloutPercentageItemModel } from "./rolloutpercentageitemmodel";
import { RolloutRuleModel } from "./rolloutrulemodel";
import { SettingDataModel } from "./settingdatamodel";
import { SettingTagModel } from "./settingtagmodel";



export class SettingValueModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: ConfigModel;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: EnvironmentModel;

  @SpeakeasyMetadata({ data: "json, name=integrationLinks", elemType: IntegrationLinkModel })
  integrationLinks?: IntegrationLinkModel[];

  @SpeakeasyMetadata({ data: "json, name=lastUpdaterUserEmail" })
  lastUpdaterUserEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdaterUserFullName" })
  lastUpdaterUserFullName?: string;

  @SpeakeasyMetadata({ data: "json, name=readOnly" })
  readOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rolloutPercentageItems", elemType: RolloutPercentageItemModel })
  rolloutPercentageItems?: RolloutPercentageItemModel[];

  @SpeakeasyMetadata({ data: "json, name=rolloutRules", elemType: RolloutRuleModel })
  rolloutRules?: RolloutRuleModel[];

  @SpeakeasyMetadata({ data: "json, name=setting" })
  setting?: SettingDataModel;

  @SpeakeasyMetadata({ data: "json, name=settingTags", elemType: SettingTagModel })
  settingTags?: SettingTagModel[];

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Map<string, any>;
}
