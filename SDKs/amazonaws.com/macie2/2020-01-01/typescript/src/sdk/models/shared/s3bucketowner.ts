import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3BucketOwner
/** 
 * Provides information about the Amazon Web Services account that owns an S3 bucket.
**/
export class S3BucketOwner extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;
}
