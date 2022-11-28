import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3Configuration
/** 
 * For a SQL-based Kinesis Data Analytics application, provides a description of an Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket and the name of the Amazon S3 object that contains the data.
**/
export class S3Configuration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BucketARN" })
  bucketArn: string;

  @SpeakeasyMetadata({ data: "json, name=FileKey" })
  fileKey: string;
}
