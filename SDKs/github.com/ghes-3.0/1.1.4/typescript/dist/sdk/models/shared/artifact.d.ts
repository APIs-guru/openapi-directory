import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An artifact
**/
export declare class Artifact extends SpeakeasyBase {
    archiveDownloadUrl: string;
    createdAt: Date;
    expired: boolean;
    expiresAt: Date;
    id: number;
    name: string;
    nodeId: string;
    sizeInBytes: number;
    updatedAt: Date;
    url: string;
}
