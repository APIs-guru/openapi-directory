import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails
/** 
 * A tag that is assigned to matching objects.
**/
export class AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
