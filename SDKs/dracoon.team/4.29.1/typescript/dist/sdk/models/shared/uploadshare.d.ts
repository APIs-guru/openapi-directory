import { SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";
/**
 * Upload Share information
**/
export declare class UploadShare extends SpeakeasyBase {
    accessKey: string;
    cntFiles?: number;
    cntUploads?: number;
    createdAt: Date;
    createdBy: UserInfo;
    dataUrl?: string;
    expireAt?: Date;
    filesExpiryPeriod?: number;
    id: number;
    internalNotes?: string;
    isEncrypted?: boolean;
    isProtected: boolean;
    maxSize?: number;
    maxSlots?: number;
    name: string;
    notes?: string;
    notifyCreator: boolean;
    recipients?: string;
    showCreatorName?: boolean;
    showCreatorUsername?: boolean;
    showUploadedFiles?: boolean;
    smsRecipients?: string;
    targetId: number;
    targetPath?: string;
    targetType?: string;
    updatedAt?: Date;
    updatedBy?: UserInfo;
}
