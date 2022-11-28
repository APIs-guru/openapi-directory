import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ModificationState } from "./modificationstate";
import { WorkspaceStateEnum } from "./workspacestateenum";
import { WorkspaceProperties } from "./workspaceproperties";



// Workspace
/** 
 * Describes a WorkSpace.
**/
export class Workspace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BundleId" })
  bundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=ComputerName" })
  computerName?: string;

  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=IpAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=ModificationStates", elemType: ModificationState })
  modificationStates?: ModificationState[];

  @SpeakeasyMetadata({ data: "json, name=RootVolumeEncryptionEnabled" })
  rootVolumeEncryptionEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: WorkspaceStateEnum;

  @SpeakeasyMetadata({ data: "json, name=SubnetId" })
  subnetId?: string;

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName?: string;

  @SpeakeasyMetadata({ data: "json, name=UserVolumeEncryptionEnabled" })
  userVolumeEncryptionEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=VolumeEncryptionKey" })
  volumeEncryptionKey?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkspaceId" })
  workspaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkspaceProperties" })
  workspaceProperties?: WorkspaceProperties;
}
