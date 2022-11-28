import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3ReferenceDataSourceUpdate
/** 
 * For a SQL-based Kinesis Data Analytics application, describes the Amazon S3 bucket name and object key name for an in-application reference table. 
**/
export class S3ReferenceDataSourceUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BucketARNUpdate" })
  bucketArnUpdate?: string;

  @SpeakeasyMetadata({ data: "json, name=FileKeyUpdate" })
  fileKeyUpdate?: string;
}
