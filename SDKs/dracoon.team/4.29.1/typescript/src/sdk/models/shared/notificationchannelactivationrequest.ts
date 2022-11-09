import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NotificationChannelActivationRequest
/** 
 * Request model for switching notification channel status
**/
export class NotificationChannelActivationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelId" })
  channelId: number;

  @Metadata({ data: "json, name=isEnabled" })
  isEnabled: boolean;
}
