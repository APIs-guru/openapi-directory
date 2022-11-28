import { SpeakeasyBase } from "../../../internal/utils";
import { Phone } from "./phone";
import { Address } from "./address";
/**
 * The type that defines the fields for the information of an individual account.
**/
export declare class IndividualAccount extends SpeakeasyBase {
    email?: string;
    firstName?: string;
    lastName?: string;
    primaryPhone?: Phone;
    registrationAddress?: Address;
    secondaryPhone?: Phone;
}
