import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectExpiration } from "./objectexpiration";
import { FileKey } from "./filekey";
import { UserKeyPairContainer } from "./userkeypaircontainer";
/**
 * Request model for creating a Download Share
**/
export declare class CreateDownloadShareRequest extends SpeakeasyBase {
    creatorLanguage?: string;
    expiration?: ObjectExpiration;
    fileKey?: FileKey;
    internalNotes?: string;
    keyPair?: UserKeyPairContainer;
    mailBody?: string;
    mailRecipients?: string;
    mailSubject?: string;
    maxDownloads?: number;
    name?: string;
    nodeId: number;
    notes?: string;
    notifyCreator?: boolean;
    password?: string;
    receiverLanguage?: string;
    sendMail?: boolean;
    sendSms?: boolean;
    showCreatorName?: boolean;
    showCreatorUsername?: boolean;
    smsRecipients?: string;
    textMessageRecipients?: string[];
}
