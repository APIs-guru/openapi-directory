import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails
/** 
 * A rule for when objects transition to specific storage classes.
**/
export class AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Date" })
  date?: string;

  @Metadata({ data: "json, name=Days" })
  days?: number;

  @Metadata({ data: "json, name=StorageClass" })
  storageClass?: string;
}
