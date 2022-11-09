import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3ApplicationCodeLocationDescription
/** 
 * Describes the location of an application's code stored in an S3 bucket.
**/
export class S3ApplicationCodeLocationDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=BucketARN" })
  bucketArn: string;

  @Metadata({ data: "json, name=FileKey" })
  fileKey: string;

  @Metadata({ data: "json, name=ObjectVersion" })
  objectVersion?: string;
}
