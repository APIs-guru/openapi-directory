import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InsightsConfiguration
/** 
 * The structure containing configurations related to insights.
**/
export class InsightsConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=InsightsEnabled" })
  insightsEnabled?: boolean;

  @Metadata({ data: "json, name=NotificationsEnabled" })
  notificationsEnabled?: boolean;
}
