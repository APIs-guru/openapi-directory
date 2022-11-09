import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3Destination
/** 
 * Specifies an S3 bucket to store data classification results in, and the encryption settings to use when storing results in that bucket.
**/
export class S3Destination extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketName" })
  bucketName: string;

  @Metadata({ data: "json, name=keyPrefix" })
  keyPrefix?: string;

  @Metadata({ data: "json, name=kmsKeyArn" })
  kmsKeyArn: string;
}
