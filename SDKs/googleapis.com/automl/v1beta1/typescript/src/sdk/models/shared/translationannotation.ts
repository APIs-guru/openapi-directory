import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TextSnippet } from "./textsnippet";


// TranslationAnnotation
/** 
 * Annotation details specific to translation.
**/
export class TranslationAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=translatedContent" })
  translatedContent?: TextSnippet;
}
