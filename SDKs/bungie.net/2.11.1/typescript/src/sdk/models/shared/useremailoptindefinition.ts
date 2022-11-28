import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserEmailSubscriptionDefinition } from "./useremailsubscriptiondefinition";



// UserEmailOptInDefinition
/** 
 * Defines a single opt-in category: a wide-scoped permission to send emails for the subject related to the opt-in.
**/
export class UserEmailOptInDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: UserEmailSubscriptionDefinition })
  dependentSubscriptions?: UserEmailSubscriptionDefinition[];

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  setByDefault?: boolean;

  @SpeakeasyMetadata()
  value?: number;
}
