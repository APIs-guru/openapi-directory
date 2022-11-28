import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { WorkspaceProperties } from "./workspaceproperties";
/**
 * Describes the information used to create a WorkSpace.
**/
export declare class WorkspaceRequest extends SpeakeasyBase {
    bundleId: string;
    directoryId: string;
    rootVolumeEncryptionEnabled?: boolean;
    tags?: Tag[];
    userName: string;
    userVolumeEncryptionEnabled?: boolean;
    volumeEncryptionKey?: string;
    workspaceProperties?: WorkspaceProperties;
}
