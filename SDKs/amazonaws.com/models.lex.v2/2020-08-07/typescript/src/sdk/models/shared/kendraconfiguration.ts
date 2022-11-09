import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KendraConfiguration
/** 
 * Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.
**/
export class KendraConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=kendraIndex" })
  kendraIndex: string;

  @Metadata({ data: "json, name=queryFilterString" })
  queryFilterString?: string;

  @Metadata({ data: "json, name=queryFilterStringEnabled" })
  queryFilterStringEnabled?: boolean;
}
