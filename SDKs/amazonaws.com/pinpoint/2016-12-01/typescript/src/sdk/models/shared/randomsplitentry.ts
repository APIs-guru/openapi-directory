import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RandomSplitEntry
/** 
 * Specifies the settings for a path in a random split activity in a journey.
**/
export class RandomSplitEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextActivity" })
  nextActivity?: string;

  @Metadata({ data: "json, name=Percentage" })
  percentage?: number;
}
