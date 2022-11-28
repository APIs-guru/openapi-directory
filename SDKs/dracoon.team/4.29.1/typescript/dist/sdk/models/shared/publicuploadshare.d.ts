import { SpeakeasyBase } from "../../../internal/utils";
import { PublicUploadedFileData } from "./publicuploadedfiledata";
import { UserUserPublicKeyListOutput } from "./useruserpublickeylist";
/**
 * Upload Share information
**/
export declare class PublicUploadShareOutput extends SpeakeasyBase {
    createdAt: Date;
    creatorName: string;
    creatorUsername?: string;
    expireAt?: Date;
    isEncrypted?: boolean;
    isProtected: boolean;
    maxSize?: number;
    maxSlots: number;
    name?: string;
    notes?: string;
    remainingSize?: number;
    remainingSlots?: number;
    showUploadedFiles?: boolean;
    uploadedFiles?: PublicUploadedFileData[];
    userUserPublicKeyList?: UserUserPublicKeyListOutput;
}
