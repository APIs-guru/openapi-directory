import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3ContentLocation
/** 
 * For a Kinesis Data Analytics application provides a description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data. 
**/
export class S3ContentLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BucketARN" })
  bucketArn: string;

  @SpeakeasyMetadata({ data: "json, name=FileKey" })
  fileKey: string;

  @SpeakeasyMetadata({ data: "json, name=ObjectVersion" })
  objectVersion?: string;
}
