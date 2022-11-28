import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SharedFileSystemConfiguration
/** 
 * The configuration for a shared file storage system that is associated with a studio resource.
**/
export class SharedFileSystemConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=fileSystemId" })
  fileSystemId?: string;

  @SpeakeasyMetadata({ data: "json, name=linuxMountPoint" })
  linuxMountPoint?: string;

  @SpeakeasyMetadata({ data: "json, name=shareName" })
  shareName?: string;

  @SpeakeasyMetadata({ data: "json, name=windowsMountDrive" })
  windowsMountDrive?: string;
}
