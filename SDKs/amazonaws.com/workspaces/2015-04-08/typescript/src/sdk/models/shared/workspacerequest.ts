import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { WorkspaceProperties } from "./workspaceproperties";



// WorkspaceRequest
/** 
 * Describes the information used to create a WorkSpace.
**/
export class WorkspaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BundleId" })
  bundleId: string;

  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "json, name=RootVolumeEncryptionEnabled" })
  rootVolumeEncryptionEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName: string;

  @SpeakeasyMetadata({ data: "json, name=UserVolumeEncryptionEnabled" })
  userVolumeEncryptionEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=VolumeEncryptionKey" })
  volumeEncryptionKey?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkspaceProperties" })
  workspaceProperties?: WorkspaceProperties;
}
