import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails
/** 
 * A tag filter.
**/
export class AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
