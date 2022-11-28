import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobComparatorEnum } from "./jobcomparatorenum";
import { TagValuePair } from "./tagvaluepair";
import { TagTargetEnum } from "./tagtargetenum";



// TagScopeTerm
/** 
 * Specifies a tag-based condition that determines whether an S3 object is included or excluded from a classification job.
**/
export class TagScopeTerm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comparator" })
  comparator?: JobComparatorEnum;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=tagValues", elemType: TagValuePair })
  tagValues?: TagValuePair[];

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: TagTargetEnum;
}
