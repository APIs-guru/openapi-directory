import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Country
/** 
 * Information about a country.
**/
export class Country extends SpeakeasyBase {
  @Metadata({ data: "json, name=CountryCode" })
  countryCode?: string;

  @Metadata({ data: "json, name=CountryName" })
  countryName?: string;
}
