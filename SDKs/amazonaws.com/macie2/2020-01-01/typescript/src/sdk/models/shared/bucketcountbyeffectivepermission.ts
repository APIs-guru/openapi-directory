import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BucketCountByEffectivePermission
/** 
 * Provides information about the number of S3 buckets that are publicly accessible based on a combination of permissions settings for each bucket.
**/
export class BucketCountByEffectivePermission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=publiclyAccessible" })
  publiclyAccessible?: number;

  @SpeakeasyMetadata({ data: "json, name=publiclyReadable" })
  publiclyReadable?: number;

  @SpeakeasyMetadata({ data: "json, name=publiclyWritable" })
  publiclyWritable?: number;

  @SpeakeasyMetadata({ data: "json, name=unknown" })
  unknown?: number;
}
