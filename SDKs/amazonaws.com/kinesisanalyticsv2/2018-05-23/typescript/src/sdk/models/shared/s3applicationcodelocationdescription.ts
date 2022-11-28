import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3ApplicationCodeLocationDescription
/** 
 * Describes the location of an application's code stored in an S3 bucket.
**/
export class S3ApplicationCodeLocationDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BucketARN" })
  bucketArn: string;

  @SpeakeasyMetadata({ data: "json, name=FileKey" })
  fileKey: string;

  @SpeakeasyMetadata({ data: "json, name=ObjectVersion" })
  objectVersion?: string;
}
