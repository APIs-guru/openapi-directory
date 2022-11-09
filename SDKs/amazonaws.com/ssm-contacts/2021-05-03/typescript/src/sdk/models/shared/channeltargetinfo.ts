import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ChannelTargetInfo
/** 
 * Information about the contact channel that Incident Manager uses to engage the contact.
**/
export class ChannelTargetInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContactChannelId" })
  contactChannelId: string;

  @Metadata({ data: "json, name=RetryIntervalInMinutes" })
  retryIntervalInMinutes?: number;
}
