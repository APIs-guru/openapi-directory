import { SpeakeasyBase } from "../../../internal/utils";
import { CloudPubsubTopic } from "./cloudpubsubtopic";
/**
 * Settings for callback notifications. For more details see [Google Workspace Alert Notification](https://developers.google.com/admin-sdk/alertcenter/guides/notifications).
**/
export declare class Notification extends SpeakeasyBase {
    cloudPubsubTopic?: CloudPubsubTopic;
}
