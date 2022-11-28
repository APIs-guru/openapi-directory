import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CampaignLimits
/** 
 * For a campaign, specifies limits on the messages that the campaign can send. For an application, specifies the default limits for messages that campaigns in the application can send.
**/
export class CampaignLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Daily" })
  daily?: number;

  @SpeakeasyMetadata({ data: "json, name=MaximumDuration" })
  maximumDuration?: number;

  @SpeakeasyMetadata({ data: "json, name=MessagesPerSecond" })
  messagesPerSecond?: number;

  @SpeakeasyMetadata({ data: "json, name=Session" })
  session?: number;

  @SpeakeasyMetadata({ data: "json, name=Total" })
  total?: number;
}
