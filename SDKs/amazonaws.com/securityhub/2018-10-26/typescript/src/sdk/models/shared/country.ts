import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Country
/** 
 * Information about a country.
**/
export class Country extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CountryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=CountryName" })
  countryName?: string;
}
