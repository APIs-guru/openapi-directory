import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectExpiration } from "./objectexpiration";
/**
 * Request model for creating an Upload Share
**/
export declare class CreateUploadShareRequest extends SpeakeasyBase {
    creatorLanguage?: string;
    expiration?: ObjectExpiration;
    filesExpiryPeriod?: number;
    internalNotes?: string;
    mailBody?: string;
    mailRecipients?: string;
    mailSubject?: string;
    maxSize?: number;
    maxSlots?: number;
    name?: string;
    notes?: string;
    notifyCreator?: boolean;
    password?: string;
    receiverLanguage?: string;
    sendMail?: boolean;
    sendSms?: boolean;
    showCreatorName?: boolean;
    showCreatorUsername?: boolean;
    showUploadedFiles?: boolean;
    smsRecipients?: string;
    targetId: number;
    textMessageRecipients?: string[];
}
