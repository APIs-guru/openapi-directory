import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectExpiration } from "./objectexpiration";
/**
 * Request model for updating a Download Share
**/
export declare class UpdateDownloadShareRequest extends SpeakeasyBase {
    defaultCountry?: string;
    expiration?: ObjectExpiration;
    internalNotes?: string;
    maxDownloads?: number;
    name?: string;
    notes?: string;
    notifyCreator?: boolean;
    password?: string;
    receiverLanguage?: string;
    resetMaxDownloads?: boolean;
    resetPassword?: boolean;
    showCreatorName?: boolean;
    showCreatorUsername?: boolean;
    textMessageRecipients?: string[];
}
