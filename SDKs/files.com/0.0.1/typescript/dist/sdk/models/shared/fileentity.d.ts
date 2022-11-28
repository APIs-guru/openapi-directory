import { SpeakeasyBase } from "../../../internal/utils";
import { PreviewEntity } from "./previewentity";
/**
 * List Folders by path
**/
export declare class FileEntity extends SpeakeasyBase {
    crc32?: string;
    displayName?: string;
    downloadUri?: string;
    md5?: string;
    mimeType?: string;
    mtime?: Date;
    path?: string;
    permissions?: string;
    preview?: PreviewEntity;
    previewId?: number;
    priorityColor?: string;
    providedMtime?: Date;
    region?: string;
    size?: number;
    subfoldersLocked?: boolean;
    type?: string;
}
