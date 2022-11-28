import { SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";
/**
 * Download Share information
**/
export declare class DownloadShare extends SpeakeasyBase {
    accessKey: string;
    classification?: number;
    cntDownloads: number;
    createdAt: Date;
    createdBy: UserInfo;
    dataUrl?: string;
    expireAt?: Date;
    id: number;
    internalNotes?: string;
    isEncrypted?: boolean;
    isProtected?: boolean;
    maxDownloads?: number;
    name: string;
    nodeId: number;
    nodePath?: string;
    nodeType?: string;
    notes?: string;
    notifyCreator: boolean;
    recipients?: string;
    showCreatorName?: boolean;
    showCreatorUsername?: boolean;
    smsRecipients?: string;
    updatedAt?: Date;
    updatedBy?: UserInfo;
}
