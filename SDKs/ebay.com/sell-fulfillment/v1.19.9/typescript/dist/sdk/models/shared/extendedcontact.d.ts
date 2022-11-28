import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { PhoneNumber } from "./phonenumber";
/**
 * This type contains shipping and contact information for a buyer or an eBay shipping partner.
**/
export declare class ExtendedContact extends SpeakeasyBase {
    companyName?: string;
    contactAddress?: Address;
    email?: string;
    fullName?: string;
    primaryPhone?: PhoneNumber;
}
