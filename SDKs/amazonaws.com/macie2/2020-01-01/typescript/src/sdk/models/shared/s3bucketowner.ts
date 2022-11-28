import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3BucketOwner
/** 
 * Provides information about the Amazon Web Services account that owns an S3 bucket.
**/
export class S3BucketOwner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
