import { SpeakeasyBase } from "../../../internal/utils";
import { FileSystemAccessModeEnum } from "./filesystemaccessmodeenum";
import { FileSystemTypeEnum } from "./filesystemtypeenum";
/**
 * Specifies a file system data source for a channel.
**/
export declare class FileSystemDataSource extends SpeakeasyBase {
    directoryPath: string;
    fileSystemAccessMode: FileSystemAccessModeEnum;
    fileSystemId: string;
    fileSystemType: FileSystemTypeEnum;
}
