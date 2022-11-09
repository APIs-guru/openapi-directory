import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3BucketLogDestination
/** 
 * Specifies an Amazon S3 bucket for logging audio conversations
**/
export class S3BucketLogDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=kmsKeyArn" })
  kmsKeyArn?: string;

  @Metadata({ data: "json, name=logPrefix" })
  logPrefix: string;

  @Metadata({ data: "json, name=s3BucketArn" })
  s3BucketArn: string;
}
