import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KendraConfiguration
/** 
 * Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance. For more information, see <a href="http://docs.aws.amazon.com/lex/latest/dg/built-in-intent-kendra-search.html"> AMAZON.KendraSearchIntent</a>.
**/
export class KendraConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kendraIndex" })
  kendraIndex: string;

  @SpeakeasyMetadata({ data: "json, name=queryFilterString" })
  queryFilterString?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role: string;
}
