import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails
/** 
 * A tag that is assigned to matching objects.
**/
export class AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
