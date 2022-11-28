import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LocalizationSettings
/** 
 * Localization settings for reports, such as currency and language. It affects how metrics are calculated.
**/
export class LocalizationSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;
}
