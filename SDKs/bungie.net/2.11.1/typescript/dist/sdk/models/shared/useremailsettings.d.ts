import { SpeakeasyBase } from "../../../internal/utils";
import { UserEmailOptInDefinition } from "./useremailoptindefinition";
import { UserEmailSubscriptionDefinition } from "./useremailsubscriptiondefinition";
import { UserEmailViewDefinition } from "./useremailviewdefinition";
/**
 * The set of all email subscription/opt-in settings and definitions.
**/
export declare class UserEmailSettings extends SpeakeasyBase {
    optInDefinitions?: Map<string, UserEmailOptInDefinition>;
    subscriptionDefinitions?: Map<string, UserEmailSubscriptionDefinition>;
    views?: Map<string, UserEmailViewDefinition>;
}
