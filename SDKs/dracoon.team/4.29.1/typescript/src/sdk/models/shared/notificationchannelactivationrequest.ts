import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NotificationChannelActivationRequest
/** 
 * Request model for switching notification channel status
**/
export class NotificationChannelActivationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId: number;

  @SpeakeasyMetadata({ data: "json, name=isEnabled" })
  isEnabled: boolean;
}
