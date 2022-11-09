import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LanguageCodeEnum } from "./languagecodeenum";


// LexiconAttributes
/** 
 * Contains metadata describing the lexicon such as the number of lexemes, language code, and so on. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.
**/
export class LexiconAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=Alphabet" })
  alphabet?: string;

  @Metadata({ data: "json, name=LanguageCode" })
  languageCode?: LanguageCodeEnum;

  @Metadata({ data: "json, name=LastModified" })
  lastModified?: Date;

  @Metadata({ data: "json, name=LexemesCount" })
  lexemesCount?: number;

  @Metadata({ data: "json, name=LexiconArn" })
  lexiconArn?: string;

  @Metadata({ data: "json, name=Size" })
  size?: number;
}
