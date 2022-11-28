import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Contact } from "./contact";
import { Phone } from "./phone";
/**
 * The type that defines the fields for the business account information.
**/
export declare class BusinessAccount extends SpeakeasyBase {
    address?: Address;
    doingBusinessAs?: string;
    email?: string;
    name?: string;
    primaryContact?: Contact;
    primaryPhone?: Phone;
    secondaryPhone?: Phone;
    website?: string;
}
