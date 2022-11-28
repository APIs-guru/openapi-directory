import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";



// LexiconAttributes
/** 
 * Contains metadata describing the lexicon such as the number of lexemes, language code, and so on. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.
**/
export class LexiconAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Alphabet" })
  alphabet?: string;

  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode?: LanguageCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=LastModified" })
  lastModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=LexemesCount" })
  lexemesCount?: number;

  @SpeakeasyMetadata({ data: "json, name=LexiconArn" })
  lexiconArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Size" })
  size?: number;
}
