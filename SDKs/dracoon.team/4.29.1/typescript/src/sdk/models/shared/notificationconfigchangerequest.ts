import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NotificationConfigChangeRequest
/** 
 * Request model for updating notification configuration
**/
export class NotificationConfigChangeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelIds" })
  channelIds: number[];
}
