import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UtteranceData } from "./utterancedata";


// UtteranceList
/** 
 * Provides a list of utterances that have been made to a specific version of your bot. The list contains a maximum of 100 utterances.
**/
export class UtteranceList extends SpeakeasyBase {
  @Metadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @Metadata({ data: "json, name=utterances", elemType: shared.UtteranceData })
  utterances?: UtteranceData[];
}
