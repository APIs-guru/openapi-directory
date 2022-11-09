import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ModificationState } from "./modificationstate";
import { WorkspaceStateEnum } from "./workspacestateenum";
import { WorkspaceProperties } from "./workspaceproperties";


// Workspace
/** 
 * Describes a WorkSpace.
**/
export class Workspace extends SpeakeasyBase {
  @Metadata({ data: "json, name=BundleId" })
  bundleId?: string;

  @Metadata({ data: "json, name=ComputerName" })
  computerName?: string;

  @Metadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=IpAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=ModificationStates", elemType: shared.ModificationState })
  modificationStates?: ModificationState[];

  @Metadata({ data: "json, name=RootVolumeEncryptionEnabled" })
  rootVolumeEncryptionEnabled?: boolean;

  @Metadata({ data: "json, name=State" })
  state?: WorkspaceStateEnum;

  @Metadata({ data: "json, name=SubnetId" })
  subnetId?: string;

  @Metadata({ data: "json, name=UserName" })
  userName?: string;

  @Metadata({ data: "json, name=UserVolumeEncryptionEnabled" })
  userVolumeEncryptionEnabled?: boolean;

  @Metadata({ data: "json, name=VolumeEncryptionKey" })
  volumeEncryptionKey?: string;

  @Metadata({ data: "json, name=WorkspaceId" })
  workspaceId?: string;

  @Metadata({ data: "json, name=WorkspaceProperties" })
  workspaceProperties?: WorkspaceProperties;
}
