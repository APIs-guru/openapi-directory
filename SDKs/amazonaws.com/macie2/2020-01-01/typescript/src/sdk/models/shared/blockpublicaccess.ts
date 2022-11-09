import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BlockPublicAccess
/** 
 * Provides information about the block public access settings for an S3 bucket. These settings can apply to a bucket at the account level or bucket level. For detailed information about each setting, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html">Blocking public access to your Amazon S3 storage</a> in the <i>Amazon Simple Storage Service User Guide</i>.
**/
export class BlockPublicAccess extends SpeakeasyBase {
  @Metadata({ data: "json, name=blockPublicAcls" })
  blockPublicAcls?: boolean;

  @Metadata({ data: "json, name=blockPublicPolicy" })
  blockPublicPolicy?: boolean;

  @Metadata({ data: "json, name=ignorePublicAcls" })
  ignorePublicAcls?: boolean;

  @Metadata({ data: "json, name=restrictPublicBuckets" })
  restrictPublicBuckets?: boolean;
}
