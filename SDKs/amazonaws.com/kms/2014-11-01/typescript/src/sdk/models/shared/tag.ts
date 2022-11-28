import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Tag
/** 
 * <p>A key-value pair. A tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty (null) strings.</p> <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>.</p>
**/
export class Tag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TagKey" })
  tagKey: string;

  @SpeakeasyMetadata({ data: "json, name=TagValue" })
  tagValue: string;
}
