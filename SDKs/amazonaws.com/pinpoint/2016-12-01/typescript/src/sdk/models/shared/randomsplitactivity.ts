import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RandomSplitEntry } from "./randomsplitentry";


// RandomSplitActivity
/** 
 * Specifies the settings for a random split activity in a journey. This type of activity randomly sends specified percentages of participants down one of as many as five paths in a journey, based on conditions that you specify.
**/
export class RandomSplitActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=Branches", elemType: shared.RandomSplitEntry })
  branches?: RandomSplitEntry[];
}
