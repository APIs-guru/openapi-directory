import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RolloutPercentageItemModel } from "./rolloutpercentageitemmodel";
import { RolloutRuleModel } from "./rolloutrulemodel";



export class UpdateSettingValueModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rolloutPercentageItems", elemType: RolloutPercentageItemModel })
  rolloutPercentageItems?: RolloutPercentageItemModel[];

  @SpeakeasyMetadata({ data: "json, name=rolloutRules", elemType: RolloutRuleModel })
  rolloutRules?: RolloutRuleModel[];

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Map<string, any>;
}
