import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BucketCountBySharedAccessType
/** 
 * Provides information about the number of S3 buckets that are or aren't shared with other Amazon Web Services accounts.
**/
export class BucketCountBySharedAccessType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=external" })
  external?: number;

  @SpeakeasyMetadata({ data: "json, name=internal" })
  internal?: number;

  @SpeakeasyMetadata({ data: "json, name=notShared" })
  notShared?: number;

  @SpeakeasyMetadata({ data: "json, name=unknown" })
  unknown?: number;
}
