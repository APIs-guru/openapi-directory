import { SpeakeasyBase } from "../../../internal/utils";
import { FileKey } from "./filekey";
import { PrivateKeyContainerOutput } from "./privatekeycontainer";
/**
 * Download Share information
**/
export declare class PublicDownloadShareOutput extends SpeakeasyBase {
    createdAt: Date;
    creatorName: string;
    creatorUsername?: string;
    expireAt?: Date;
    fileKey?: FileKey;
    fileName: string;
    hasDownloadLimit: boolean;
    isEncrypted?: boolean;
    isProtected: boolean;
    limitReached: boolean;
    mediaType: string;
    name?: string;
    notes?: string;
    privateKeyContainer?: PrivateKeyContainerOutput;
    size: number;
}
