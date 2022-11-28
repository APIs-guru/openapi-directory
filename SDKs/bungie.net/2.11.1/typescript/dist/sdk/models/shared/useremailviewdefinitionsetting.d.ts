import { SpeakeasyBase } from "../../../internal/utils";
import { UserEMailSettingLocalization } from "./useremailsettinglocalization";
import { UserEmailSubscriptionDefinition } from "./useremailsubscriptiondefinition";
export declare class UserEmailViewDefinitionSetting extends SpeakeasyBase {
    localization?: Map<string, UserEMailSettingLocalization>;
    name?: string;
    optInAggregateValue?: number;
    setByDefault?: boolean;
    subscriptions?: UserEmailSubscriptionDefinition[];
}
