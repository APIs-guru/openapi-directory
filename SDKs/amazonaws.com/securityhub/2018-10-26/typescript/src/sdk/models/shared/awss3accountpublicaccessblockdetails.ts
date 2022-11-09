import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsS3AccountPublicAccessBlockDetails
/** 
 * provides information about the Amazon S3 Public Access Block configuration for accounts.
**/
export class AwsS3AccountPublicAccessBlockDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=BlockPublicAcls" })
  blockPublicAcls?: boolean;

  @Metadata({ data: "json, name=BlockPublicPolicy" })
  blockPublicPolicy?: boolean;

  @Metadata({ data: "json, name=IgnorePublicAcls" })
  ignorePublicAcls?: boolean;

  @Metadata({ data: "json, name=RestrictPublicBuckets" })
  restrictPublicBuckets?: boolean;
}
