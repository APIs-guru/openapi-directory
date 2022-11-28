import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileSystemDataSource } from "./filesystemdatasource";
import { S3DataSource } from "./s3datasource";



// DataSource
/** 
 * Describes the location of the channel data.
**/
export class DataSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FileSystemDataSource" })
  fileSystemDataSource?: FileSystemDataSource;

  @SpeakeasyMetadata({ data: "json, name=S3DataSource" })
  s3DataSource?: S3DataSource;
}
