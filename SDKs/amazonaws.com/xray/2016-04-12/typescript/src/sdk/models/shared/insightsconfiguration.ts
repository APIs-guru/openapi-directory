import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InsightsConfiguration
/** 
 * The structure containing configurations related to insights.
**/
export class InsightsConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InsightsEnabled" })
  insightsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=NotificationsEnabled" })
  notificationsEnabled?: boolean;
}
