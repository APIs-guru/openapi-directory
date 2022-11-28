import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WaitTime } from "./waittime";



// WaitActivity
/** 
 * Specifies the settings for a wait activity in a journey. This type of activity waits for a certain amount of time or until a specific date and time before moving participants to the next activity in a journey.
**/
export class WaitActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextActivity" })
  nextActivity?: string;

  @SpeakeasyMetadata({ data: "json, name=WaitTime" })
  waitTime?: WaitTime;
}
