import { SpeakeasyBase } from "../../../internal/utils";
import { FileSystemDataSource } from "./filesystemdatasource";
import { S3DataSource } from "./s3datasource";
/**
 * Describes the location of the channel data.
**/
export declare class DataSource extends SpeakeasyBase {
    fileSystemDataSource?: FileSystemDataSource;
    s3DataSource?: S3DataSource;
}
