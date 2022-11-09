import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3ReferenceDataSourceUpdate
/** 
 * For a SQL-based Kinesis Data Analytics application, describes the Amazon S3 bucket name and object key name for an in-application reference table. 
**/
export class S3ReferenceDataSourceUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=BucketARNUpdate" })
  bucketArnUpdate?: string;

  @Metadata({ data: "json, name=FileKeyUpdate" })
  fileKeyUpdate?: string;
}
