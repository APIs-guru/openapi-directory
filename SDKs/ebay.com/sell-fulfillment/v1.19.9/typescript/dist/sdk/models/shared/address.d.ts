import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type contains the details of a geographical address.
**/
export declare class Address extends SpeakeasyBase {
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    country?: string;
    county?: string;
    postalCode?: string;
    stateOrProvince?: string;
}
