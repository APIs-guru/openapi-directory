import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserEmailOptInDefinition } from "./useremailoptindefinition";
import { UserEmailSubscriptionDefinition } from "./useremailsubscriptiondefinition";
import { UserEmailViewDefinition } from "./useremailviewdefinition";



// UserEmailSettings
/** 
 * The set of all email subscription/opt-in settings and definitions.
**/
export class UserEmailSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: UserEmailOptInDefinition })
  optInDefinitions?: Map<string, UserEmailOptInDefinition>;

  @SpeakeasyMetadata({ elemType: UserEmailSubscriptionDefinition })
  subscriptionDefinitions?: Map<string, UserEmailSubscriptionDefinition>;

  @SpeakeasyMetadata({ elemType: UserEmailViewDefinition })
  views?: Map<string, UserEmailViewDefinition>;
}
