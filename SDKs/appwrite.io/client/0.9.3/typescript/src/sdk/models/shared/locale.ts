import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Locale
/** 
 * Locale
**/
export class Locale extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=continent" })
  continent: string;

  @SpeakeasyMetadata({ data: "json, name=continentCode" })
  continentCode: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=eu" })
  eu: boolean;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;
}
