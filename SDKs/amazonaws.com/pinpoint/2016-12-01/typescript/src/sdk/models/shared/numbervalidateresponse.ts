import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NumberValidateResponse
/** 
 * Provides information about a phone number.
**/
export class NumberValidateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Carrier" })
  carrier?: string;

  @Metadata({ data: "json, name=City" })
  city?: string;

  @Metadata({ data: "json, name=CleansedPhoneNumberE164" })
  cleansedPhoneNumberE164?: string;

  @Metadata({ data: "json, name=CleansedPhoneNumberNational" })
  cleansedPhoneNumberNational?: string;

  @Metadata({ data: "json, name=Country" })
  country?: string;

  @Metadata({ data: "json, name=CountryCodeIso2" })
  countryCodeIso2?: string;

  @Metadata({ data: "json, name=CountryCodeNumeric" })
  countryCodeNumeric?: string;

  @Metadata({ data: "json, name=County" })
  county?: string;

  @Metadata({ data: "json, name=OriginalCountryCodeIso2" })
  originalCountryCodeIso2?: string;

  @Metadata({ data: "json, name=OriginalPhoneNumber" })
  originalPhoneNumber?: string;

  @Metadata({ data: "json, name=PhoneType" })
  phoneType?: string;

  @Metadata({ data: "json, name=PhoneTypeCode" })
  phoneTypeCode?: number;

  @Metadata({ data: "json, name=Timezone" })
  timezone?: string;

  @Metadata({ data: "json, name=ZipCode" })
  zipCode?: string;
}
