import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RolloutPercentageItemModel } from "./rolloutpercentageitemmodel";
import { RolloutRuleModel } from "./rolloutrulemodel";


export class UpdateSettingValueModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=rolloutPercentageItems", elemType: shared.RolloutPercentageItemModel })
  rolloutPercentageItems?: RolloutPercentageItemModel[];

  @Metadata({ data: "json, name=rolloutRules", elemType: shared.RolloutRuleModel })
  rolloutRules?: RolloutRuleModel[];

  @Metadata({ data: "json, name=value" })
  value?: Map<string, any>;
}
