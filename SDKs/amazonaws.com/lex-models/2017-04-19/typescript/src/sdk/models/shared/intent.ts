import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Intent
/** 
 * Identifies the specific version of an intent.
**/
export class Intent extends SpeakeasyBase {
  @Metadata({ data: "json, name=intentName" })
  intentName: string;

  @Metadata({ data: "json, name=intentVersion" })
  intentVersion: string;
}
