import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HoldoutActivity
/** 
 * Specifies the settings for a holdout activity in a journey. This type of activity stops a journey for a specified percentage of participants.
**/
export class HoldoutActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextActivity" })
  nextActivity?: string;

  @Metadata({ data: "json, name=Percentage" })
  percentage: number;
}
