import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NotificationConfigChangeRequest
/** 
 * Request model for updating notification configuration
**/
export class NotificationConfigChangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelIds" })
  channelIds: number[];
}
