import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3BucketLogDestination
/** 
 * Specifies an Amazon S3 bucket for logging audio conversations
**/
export class S3BucketLogDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kmsKeyArn" })
  kmsKeyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=logPrefix" })
  logPrefix: string;

  @SpeakeasyMetadata({ data: "json, name=s3BucketArn" })
  s3BucketArn: string;
}
