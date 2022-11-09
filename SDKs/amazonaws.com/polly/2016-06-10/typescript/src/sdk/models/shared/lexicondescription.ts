import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LexiconAttributes } from "./lexiconattributes";


// LexiconDescription
/** 
 * Describes the content of the lexicon.
**/
export class LexiconDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes" })
  attributes?: LexiconAttributes;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
