import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UtteranceData
/** 
 * Provides information about a single utterance that was made to your bot. 
**/
export class UtteranceData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=distinctUsers" })
  distinctUsers?: number;

  @SpeakeasyMetadata({ data: "json, name=firstUtteredDate" })
  firstUtteredDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUtteredDate" })
  lastUtteredDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=utteranceString" })
  utteranceString?: string;
}
