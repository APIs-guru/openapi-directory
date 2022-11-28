import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";



// JobNotification
/** 
 * Notification configurations.
**/
export class JobNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: Message;

  @SpeakeasyMetadata({ data: "json, name=pubsubTopic" })
  pubsubTopic?: string;
}
