import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileSystemAccessModeEnum } from "./filesystemaccessmodeenum";
import { FileSystemTypeEnum } from "./filesystemtypeenum";



// FileSystemDataSource
/** 
 * Specifies a file system data source for a channel.
**/
export class FileSystemDataSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryPath" })
  directoryPath: string;

  @SpeakeasyMetadata({ data: "json, name=FileSystemAccessMode" })
  fileSystemAccessMode: FileSystemAccessModeEnum;

  @SpeakeasyMetadata({ data: "json, name=FileSystemId" })
  fileSystemId: string;

  @SpeakeasyMetadata({ data: "json, name=FileSystemType" })
  fileSystemType: FileSystemTypeEnum;
}
