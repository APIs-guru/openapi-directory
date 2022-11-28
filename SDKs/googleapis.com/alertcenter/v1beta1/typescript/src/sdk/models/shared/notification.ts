import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudPubsubTopic } from "./cloudpubsubtopic";



// Notification
/** 
 * Settings for callback notifications. For more details see [Google Workspace Alert Notification](https://developers.google.com/admin-sdk/alertcenter/guides/notifications).
**/
export class Notification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudPubsubTopic" })
  cloudPubsubTopic?: CloudPubsubTopic;
}
