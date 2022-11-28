import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NumberValidateResponse
/** 
 * Provides information about a phone number.
**/
export class NumberValidateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Carrier" })
  carrier?: string;

  @SpeakeasyMetadata({ data: "json, name=City" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=CleansedPhoneNumberE164" })
  cleansedPhoneNumberE164?: string;

  @SpeakeasyMetadata({ data: "json, name=CleansedPhoneNumberNational" })
  cleansedPhoneNumberNational?: string;

  @SpeakeasyMetadata({ data: "json, name=Country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=CountryCodeIso2" })
  countryCodeIso2?: string;

  @SpeakeasyMetadata({ data: "json, name=CountryCodeNumeric" })
  countryCodeNumeric?: string;

  @SpeakeasyMetadata({ data: "json, name=County" })
  county?: string;

  @SpeakeasyMetadata({ data: "json, name=OriginalCountryCodeIso2" })
  originalCountryCodeIso2?: string;

  @SpeakeasyMetadata({ data: "json, name=OriginalPhoneNumber" })
  originalPhoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=PhoneType" })
  phoneType?: string;

  @SpeakeasyMetadata({ data: "json, name=PhoneTypeCode" })
  phoneTypeCode?: number;

  @SpeakeasyMetadata({ data: "json, name=Timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=ZipCode" })
  zipCode?: string;
}
