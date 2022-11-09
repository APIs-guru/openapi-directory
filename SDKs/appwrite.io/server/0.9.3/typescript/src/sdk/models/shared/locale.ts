import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Locale
/** 
 * Locale
**/
export class Locale extends SpeakeasyBase {
  @Metadata({ data: "json, name=continent" })
  continent: string;

  @Metadata({ data: "json, name=continentCode" })
  continentCode: string;

  @Metadata({ data: "json, name=country" })
  country: string;

  @Metadata({ data: "json, name=countryCode" })
  countryCode: string;

  @Metadata({ data: "json, name=currency" })
  currency: string;

  @Metadata({ data: "json, name=eu" })
  eu: boolean;

  @Metadata({ data: "json, name=ip" })
  ip: string;
}
