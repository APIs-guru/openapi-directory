import { SpeakeasyBase } from "../../../internal/utils";
import { ContactAddress } from "./contactaddress";
import { PhoneNumber } from "./phonenumber";
/**
 * This complex type contains contact information for an individual buyer or seller.
**/
export declare class Contact extends SpeakeasyBase {
    companyName?: string;
    contactAddress?: ContactAddress;
    fullName?: string;
    primaryPhone?: PhoneNumber;
}
