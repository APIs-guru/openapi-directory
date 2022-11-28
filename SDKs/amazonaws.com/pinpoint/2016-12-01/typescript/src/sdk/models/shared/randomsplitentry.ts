import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RandomSplitEntry
/** 
 * Specifies the settings for a path in a random split activity in a journey.
**/
export class RandomSplitEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextActivity" })
  nextActivity?: string;

  @SpeakeasyMetadata({ data: "json, name=Percentage" })
  percentage?: number;
}
