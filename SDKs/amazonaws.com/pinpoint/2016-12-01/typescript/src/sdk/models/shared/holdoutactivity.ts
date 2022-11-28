import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HoldoutActivity
/** 
 * Specifies the settings for a holdout activity in a journey. This type of activity stops a journey for a specified percentage of participants.
**/
export class HoldoutActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextActivity" })
  nextActivity?: string;

  @SpeakeasyMetadata({ data: "json, name=Percentage" })
  percentage: number;
}
