import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SharedFileSystemConfiguration
/** 
 * The configuration for a shared file storage system that is associated with a studio resource.
**/
export class SharedFileSystemConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=endpoint" })
  endpoint?: string;

  @Metadata({ data: "json, name=fileSystemId" })
  fileSystemId?: string;

  @Metadata({ data: "json, name=linuxMountPoint" })
  linuxMountPoint?: string;

  @Metadata({ data: "json, name=shareName" })
  shareName?: string;

  @Metadata({ data: "json, name=windowsMountDrive" })
  windowsMountDrive?: string;
}
