import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KendraConfiguration
/** 
 * Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.
**/
export class KendraConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kendraIndex" })
  kendraIndex: string;

  @SpeakeasyMetadata({ data: "json, name=queryFilterString" })
  queryFilterString?: string;

  @SpeakeasyMetadata({ data: "json, name=queryFilterStringEnabled" })
  queryFilterStringEnabled?: boolean;
}
