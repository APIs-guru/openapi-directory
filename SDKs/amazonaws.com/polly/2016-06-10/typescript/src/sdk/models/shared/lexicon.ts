import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Lexicon
/** 
 * Provides lexicon name and lexicon content in string format. For more information, see <a href="https://www.w3.org/TR/pronunciation-lexicon/">Pronunciation Lexicon Specification (PLS) Version 1.0</a>.
**/
export class Lexicon extends SpeakeasyBase {
  @Metadata({ data: "json, name=Content" })
  content?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
