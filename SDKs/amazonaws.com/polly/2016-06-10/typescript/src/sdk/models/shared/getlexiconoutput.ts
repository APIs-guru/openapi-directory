import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Lexicon } from "./lexicon";
import { LexiconAttributes } from "./lexiconattributes";


export class GetLexiconOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Lexicon" })
  lexicon?: Lexicon;

  @Metadata({ data: "json, name=LexiconAttributes" })
  lexiconAttributes?: LexiconAttributes;
}
