import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsS3AccountPublicAccessBlockDetails
/** 
 * provides information about the Amazon S3 Public Access Block configuration for accounts.
**/
export class AwsS3AccountPublicAccessBlockDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BlockPublicAcls" })
  blockPublicAcls?: boolean;

  @SpeakeasyMetadata({ data: "json, name=BlockPublicPolicy" })
  blockPublicPolicy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IgnorePublicAcls" })
  ignorePublicAcls?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RestrictPublicBuckets" })
  restrictPublicBuckets?: boolean;
}
