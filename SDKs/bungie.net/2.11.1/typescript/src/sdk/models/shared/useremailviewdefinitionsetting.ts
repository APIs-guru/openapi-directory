import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserEMailSettingLocalization } from "./useremailsettinglocalization";
import { UserEmailSubscriptionDefinition } from "./useremailsubscriptiondefinition";



export class UserEmailViewDefinitionSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: UserEMailSettingLocalization })
  localization?: Map<string, UserEMailSettingLocalization>;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  optInAggregateValue?: number;

  @SpeakeasyMetadata()
  setByDefault?: boolean;

  @SpeakeasyMetadata({ elemType: UserEmailSubscriptionDefinition })
  subscriptions?: UserEmailSubscriptionDefinition[];
}
