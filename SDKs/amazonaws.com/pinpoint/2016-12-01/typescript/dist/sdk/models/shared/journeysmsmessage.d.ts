import { SpeakeasyBase } from "../../../internal/utils";
import { MessageTypeEnum } from "./messagetypeenum";
/**
 * Specifies the sender ID and message type for an SMS message that's sent to participants in a journey.
**/
export declare class JourneySmsMessage extends SpeakeasyBase {
    entityId?: string;
    messageType?: MessageTypeEnum;
    originationNumber?: string;
    senderId?: string;
    templateId?: string;
}
