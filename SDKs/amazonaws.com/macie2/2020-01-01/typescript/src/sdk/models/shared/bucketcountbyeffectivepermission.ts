import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BucketCountByEffectivePermission
/** 
 * Provides information about the number of S3 buckets that are publicly accessible based on a combination of permissions settings for each bucket.
**/
export class BucketCountByEffectivePermission extends SpeakeasyBase {
  @Metadata({ data: "json, name=publiclyAccessible" })
  publiclyAccessible?: number;

  @Metadata({ data: "json, name=publiclyReadable" })
  publiclyReadable?: number;

  @Metadata({ data: "json, name=publiclyWritable" })
  publiclyWritable?: number;

  @Metadata({ data: "json, name=unknown" })
  unknown?: number;
}
