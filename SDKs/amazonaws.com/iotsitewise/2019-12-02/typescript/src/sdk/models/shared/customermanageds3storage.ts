import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomerManagedS3Storage
/** 
 * Contains information about a customer managed Amazon S3 bucket.
**/
export class CustomerManagedS3Storage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=s3ResourceArn" })
  s3ResourceArn: string;
}
