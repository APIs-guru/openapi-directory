import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails
/** 
 * A rule for when objects transition to specific storage classes.
**/
export class AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=Days" })
  days?: number;

  @SpeakeasyMetadata({ data: "json, name=StorageClass" })
  storageClass?: string;
}
