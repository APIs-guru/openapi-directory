import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LocalizedText
/** 
 * A localized string with its locale.
**/
export class LocalizedText extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
