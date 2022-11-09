import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UtteranceData
/** 
 * Provides information about a single utterance that was made to your bot. 
**/
export class UtteranceData extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=distinctUsers" })
  distinctUsers?: number;

  @Metadata({ data: "json, name=firstUtteredDate" })
  firstUtteredDate?: Date;

  @Metadata({ data: "json, name=lastUtteredDate" })
  lastUtteredDate?: Date;

  @Metadata({ data: "json, name=utteranceString" })
  utteranceString?: string;
}
