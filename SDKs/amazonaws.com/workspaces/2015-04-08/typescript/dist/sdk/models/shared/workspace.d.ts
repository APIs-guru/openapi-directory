import { SpeakeasyBase } from "../../../internal/utils";
import { ModificationState } from "./modificationstate";
import { WorkspaceStateEnum } from "./workspacestateenum";
import { WorkspaceProperties } from "./workspaceproperties";
/**
 * Describes a WorkSpace.
**/
export declare class Workspace extends SpeakeasyBase {
    bundleId?: string;
    computerName?: string;
    directoryId?: string;
    errorCode?: string;
    errorMessage?: string;
    ipAddress?: string;
    modificationStates?: ModificationState[];
    rootVolumeEncryptionEnabled?: boolean;
    state?: WorkspaceStateEnum;
    subnetId?: string;
    userName?: string;
    userVolumeEncryptionEnabled?: boolean;
    volumeEncryptionKey?: string;
    workspaceId?: string;
    workspaceProperties?: WorkspaceProperties;
}
