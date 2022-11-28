import { SpeakeasyBase } from "../../../internal/utils";
import { Phone } from "./phone";
/**
 * This type is used by the payment dispute methods, and is relevant if the buyer will be returning the item to the seller.
**/
export declare class ReturnAddress extends SpeakeasyBase {
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    country?: string;
    county?: string;
    fullName?: string;
    postalCode?: string;
    primaryPhone?: Phone;
    stateOrProvince?: string;
}
