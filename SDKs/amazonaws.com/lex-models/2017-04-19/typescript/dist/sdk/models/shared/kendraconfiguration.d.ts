import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance. For more information, see <a href="http://docs.aws.amazon.com/lex/latest/dg/built-in-intent-kendra-search.html"> AMAZON.KendraSearchIntent</a>.
**/
export declare class KendraConfiguration extends SpeakeasyBase {
    kendraIndex: string;
    queryFilterString?: string;
    role: string;
}
