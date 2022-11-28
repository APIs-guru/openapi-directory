import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TextSnippet } from "./textsnippet";



// TranslationAnnotation
/** 
 * Annotation details specific to translation.
**/
export class TranslationAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=translatedContent" })
  translatedContent?: TextSnippet;
}
