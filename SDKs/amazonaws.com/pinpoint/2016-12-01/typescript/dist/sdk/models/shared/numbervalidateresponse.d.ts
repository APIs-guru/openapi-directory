import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about a phone number.
**/
export declare class NumberValidateResponse extends SpeakeasyBase {
    carrier?: string;
    city?: string;
    cleansedPhoneNumberE164?: string;
    cleansedPhoneNumberNational?: string;
    country?: string;
    countryCodeIso2?: string;
    countryCodeNumeric?: string;
    county?: string;
    originalCountryCodeIso2?: string;
    originalPhoneNumber?: string;
    phoneType?: string;
    phoneTypeCode?: number;
    timezone?: string;
    zipCode?: string;
}
