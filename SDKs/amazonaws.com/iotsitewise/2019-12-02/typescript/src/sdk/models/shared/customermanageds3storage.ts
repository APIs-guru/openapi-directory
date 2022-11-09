import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomerManagedS3Storage
/** 
 * Contains information about a customer managed Amazon S3 bucket.
**/
export class CustomerManagedS3Storage extends SpeakeasyBase {
  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=s3ResourceArn" })
  s3ResourceArn: string;
}
