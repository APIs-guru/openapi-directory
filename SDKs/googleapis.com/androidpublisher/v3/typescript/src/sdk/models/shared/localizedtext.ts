import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LocalizedText
/** 
 * Localized text in given language.
**/
export class LocalizedText extends SpeakeasyBase {
  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
