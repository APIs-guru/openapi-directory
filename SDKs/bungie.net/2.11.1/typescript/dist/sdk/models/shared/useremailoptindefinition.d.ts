import { SpeakeasyBase } from "../../../internal/utils";
import { UserEmailSubscriptionDefinition } from "./useremailsubscriptiondefinition";
/**
 * Defines a single opt-in category: a wide-scoped permission to send emails for the subject related to the opt-in.
**/
export declare class UserEmailOptInDefinition extends SpeakeasyBase {
    dependentSubscriptions?: UserEmailSubscriptionDefinition[];
    name?: string;
    setByDefault?: boolean;
    value?: number;
}
