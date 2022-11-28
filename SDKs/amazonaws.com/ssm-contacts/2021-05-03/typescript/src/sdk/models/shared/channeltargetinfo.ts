import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChannelTargetInfo
/** 
 * Information about the contact channel that Incident Manager uses to engage the contact.
**/
export class ChannelTargetInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContactChannelId" })
  contactChannelId: string;

  @SpeakeasyMetadata({ data: "json, name=RetryIntervalInMinutes" })
  retryIntervalInMinutes?: number;
}
