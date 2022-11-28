import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3Destination
/** 
 * Specifies an S3 bucket to store data classification results in, and the encryption settings to use when storing results in that bucket.
**/
export class S3Destination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketName" })
  bucketName: string;

  @SpeakeasyMetadata({ data: "json, name=keyPrefix" })
  keyPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyArn" })
  kmsKeyArn: string;
}
