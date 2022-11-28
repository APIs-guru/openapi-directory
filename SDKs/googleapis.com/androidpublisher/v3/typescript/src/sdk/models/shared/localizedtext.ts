import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LocalizedText
/** 
 * Localized text in given language.
**/
export class LocalizedText extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
