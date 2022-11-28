import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Intent
/** 
 * Identifies the specific version of an intent.
**/
export class Intent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=intentName" })
  intentName: string;

  @SpeakeasyMetadata({ data: "json, name=intentVersion" })
  intentVersion: string;
}
