import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LocalizedText
/** 
 * A localized string with its locale.
**/
export class LocalizedText extends SpeakeasyBase {
  @Metadata({ data: "json, name=locale" })
  locale?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
