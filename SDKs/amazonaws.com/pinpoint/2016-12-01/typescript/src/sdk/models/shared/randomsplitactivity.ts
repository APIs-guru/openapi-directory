import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RandomSplitEntry } from "./randomsplitentry";



// RandomSplitActivity
/** 
 * Specifies the settings for a random split activity in a journey. This type of activity randomly sends specified percentages of participants down one of as many as five paths in a journey, based on conditions that you specify.
**/
export class RandomSplitActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Branches", elemType: RandomSplitEntry })
  branches?: RandomSplitEntry[];
}
