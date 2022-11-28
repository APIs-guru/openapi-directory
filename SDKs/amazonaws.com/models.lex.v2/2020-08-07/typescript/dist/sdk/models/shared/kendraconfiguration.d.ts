import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.
**/
export declare class KendraConfiguration extends SpeakeasyBase {
    kendraIndex: string;
    queryFilterString?: string;
    queryFilterStringEnabled?: boolean;
}
