import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Lexicon
/** 
 * Provides lexicon name and lexicon content in string format. For more information, see <a href="https://www.w3.org/TR/pronunciation-lexicon/">Pronunciation Lexicon Specification (PLS) Version 1.0</a>.
**/
export class Lexicon extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
