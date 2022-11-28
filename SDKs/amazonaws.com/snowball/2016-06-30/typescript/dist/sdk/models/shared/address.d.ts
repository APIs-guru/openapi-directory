import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The address that you want the Snow device(s) associated with a specific job to be shipped to. Addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. Although no individual elements of the <code>Address</code> are required, if the address is invalid or unsupported, then an exception is thrown.
**/
export declare class Address extends SpeakeasyBase {
    addressId?: string;
    city?: string;
    company?: string;
    country?: string;
    isRestricted?: boolean;
    landmark?: string;
    name?: string;
    phoneNumber?: string;
    postalCode?: string;
    prefectureOrDistrict?: string;
    stateOrProvince?: string;
    street1?: string;
    street2?: string;
    street3?: string;
}
