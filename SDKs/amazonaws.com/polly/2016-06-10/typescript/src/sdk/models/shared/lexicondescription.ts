import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LexiconAttributes } from "./lexiconattributes";



// LexiconDescription
/** 
 * Describes the content of the lexicon.
**/
export class LexiconDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes" })
  attributes?: LexiconAttributes;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
