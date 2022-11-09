import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LocalizationSettings
/** 
 * Localization settings for reports, such as currency and language. It affects how metrics are calculated.
**/
export class LocalizationSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;
}
