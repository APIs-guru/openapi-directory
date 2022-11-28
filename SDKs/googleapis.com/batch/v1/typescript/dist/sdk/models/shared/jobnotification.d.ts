import { SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";
/**
 * Notification configurations.
**/
export declare class JobNotification extends SpeakeasyBase {
    message?: Message;
    pubsubTopic?: string;
}
