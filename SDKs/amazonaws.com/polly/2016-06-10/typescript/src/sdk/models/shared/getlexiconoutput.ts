import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Lexicon } from "./lexicon";
import { LexiconAttributes } from "./lexiconattributes";



export class GetLexiconOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Lexicon" })
  lexicon?: Lexicon;

  @SpeakeasyMetadata({ data: "json, name=LexiconAttributes" })
  lexiconAttributes?: LexiconAttributes;
}
