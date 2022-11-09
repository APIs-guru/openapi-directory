import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3ReferenceDataSource
/** 
 * <p>For a SQL-based Kinesis Data Analytics application, identifies the Amazon S3 bucket and object that contains the reference data.</p> <p>A Kinesis Data Analytics application loads reference data only once. If the data changes, you call the <a>UpdateApplication</a> operation to trigger reloading of data into your application. </p>
**/
export class S3ReferenceDataSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=BucketARN" })
  bucketArn?: string;

  @Metadata({ data: "json, name=FileKey" })
  fileKey?: string;
}
