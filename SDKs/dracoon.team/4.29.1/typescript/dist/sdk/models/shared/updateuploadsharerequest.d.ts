import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectExpiration } from "./objectexpiration";
/**
 * Request model for updating an Upload Share
**/
export declare class UpdateUploadShareRequest extends SpeakeasyBase {
    defaultCountry?: string;
    expiration?: ObjectExpiration;
    filesExpiryPeriod?: number;
    internalNotes?: string;
    maxSize?: number;
    maxSlots?: number;
    name?: string;
    notes?: string;
    notifyCreator?: boolean;
    password?: string;
    receiverLanguage?: string;
    resetFilesExpiryPeriod?: boolean;
    resetMaxSize?: boolean;
    resetMaxSlots?: boolean;
    resetPassword?: boolean;
    showCreatorName?: boolean;
    showCreatorUsername?: boolean;
    showUploadedFiles?: boolean;
    textMessageRecipients?: string[];
}
