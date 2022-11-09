import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CampaignLimits
/** 
 * For a campaign, specifies limits on the messages that the campaign can send. For an application, specifies the default limits for messages that campaigns in the application can send.
**/
export class CampaignLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=Daily" })
  daily?: number;

  @Metadata({ data: "json, name=MaximumDuration" })
  maximumDuration?: number;

  @Metadata({ data: "json, name=MessagesPerSecond" })
  messagesPerSecond?: number;

  @Metadata({ data: "json, name=Session" })
  session?: number;

  @Metadata({ data: "json, name=Total" })
  total?: number;
}
