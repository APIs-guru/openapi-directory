import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";
import { WorkspaceProperties } from "./workspaceproperties";


// WorkspaceRequest
/** 
 * Describes the information used to create a WorkSpace.
**/
export class WorkspaceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BundleId" })
  bundleId: string;

  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @Metadata({ data: "json, name=RootVolumeEncryptionEnabled" })
  rootVolumeEncryptionEnabled?: boolean;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=UserName" })
  userName: string;

  @Metadata({ data: "json, name=UserVolumeEncryptionEnabled" })
  userVolumeEncryptionEnabled?: boolean;

  @Metadata({ data: "json, name=VolumeEncryptionKey" })
  volumeEncryptionKey?: string;

  @Metadata({ data: "json, name=WorkspaceProperties" })
  workspaceProperties?: WorkspaceProperties;
}
