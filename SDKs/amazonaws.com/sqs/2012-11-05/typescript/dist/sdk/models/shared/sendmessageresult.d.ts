import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The <code>MD5OfMessageBody</code> and <code>MessageId</code> elements.
**/
export declare class SendMessageResult extends SpeakeasyBase {
    md5OfMessageAttributes?: string;
    md5OfMessageBody?: string;
    md5OfMessageSystemAttributes?: string;
    messageId?: string;
    sequenceNumber?: string;
}
