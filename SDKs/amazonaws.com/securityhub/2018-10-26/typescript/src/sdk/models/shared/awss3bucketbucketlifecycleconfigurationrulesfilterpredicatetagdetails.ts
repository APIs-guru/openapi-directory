import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails
/** 
 * A tag filter.
**/
export class AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
