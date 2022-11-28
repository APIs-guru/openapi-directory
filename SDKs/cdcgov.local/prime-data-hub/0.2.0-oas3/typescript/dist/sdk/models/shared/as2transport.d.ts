import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a single AS2 connection in all of it variations
**/
export declare class As2Transport extends SpeakeasyBase {
    contentDescription?: string;
    mimeType?: string;
    receiverId: string;
    receiverUrl: string;
    senderEmail?: string;
    senderId: string;
    type: string;
}
