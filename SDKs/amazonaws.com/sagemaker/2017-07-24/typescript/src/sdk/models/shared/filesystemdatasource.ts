import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileSystemAccessModeEnum } from "./filesystemaccessmodeenum";
import { FileSystemTypeEnum } from "./filesystemtypeenum";


// FileSystemDataSource
/** 
 * Specifies a file system data source for a channel.
**/
export class FileSystemDataSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryPath" })
  directoryPath: string;

  @Metadata({ data: "json, name=FileSystemAccessMode" })
  fileSystemAccessMode: FileSystemAccessModeEnum;

  @Metadata({ data: "json, name=FileSystemId" })
  fileSystemId: string;

  @Metadata({ data: "json, name=FileSystemType" })
  fileSystemType: FileSystemTypeEnum;
}
