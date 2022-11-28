import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
/**
 * Contains metadata describing the lexicon such as the number of lexemes, language code, and so on. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.
**/
export declare class LexiconAttributes extends SpeakeasyBase {
    alphabet?: string;
    languageCode?: LanguageCodeEnum;
    lastModified?: Date;
    lexemesCount?: number;
    lexiconArn?: string;
    size?: number;
}
