import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UtteranceData } from "./utterancedata";



// UtteranceList
/** 
 * Provides a list of utterances that have been made to a specific version of your bot. The list contains a maximum of 100 utterances.
**/
export class UtteranceList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=utterances", elemType: UtteranceData })
  utterances?: UtteranceData[];
}
