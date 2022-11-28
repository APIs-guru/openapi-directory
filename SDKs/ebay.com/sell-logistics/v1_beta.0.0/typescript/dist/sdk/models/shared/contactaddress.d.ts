import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This complex type specifies the details of a geographical address.
**/
export declare class ContactAddress extends SpeakeasyBase {
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    countryCode?: string;
    county?: string;
    postalCode?: string;
    stateOrProvince?: string;
}
