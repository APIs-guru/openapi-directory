import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BucketCountBySharedAccessType
/** 
 * Provides information about the number of S3 buckets that are or aren't shared with other Amazon Web Services accounts.
**/
export class BucketCountBySharedAccessType extends SpeakeasyBase {
  @Metadata({ data: "json, name=external" })
  external?: number;

  @Metadata({ data: "json, name=internal" })
  internal?: number;

  @Metadata({ data: "json, name=notShared" })
  notShared?: number;

  @Metadata({ data: "json, name=unknown" })
  unknown?: number;
}
