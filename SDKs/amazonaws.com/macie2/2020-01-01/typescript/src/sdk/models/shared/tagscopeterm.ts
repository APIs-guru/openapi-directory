import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobComparatorEnum } from "./jobcomparatorenum";
import { TagValuePair } from "./tagvaluepair";
import { TagTargetEnum } from "./tagtargetenum";


// TagScopeTerm
/** 
 * Specifies a tag-based condition that determines whether an S3 object is included or excluded from a classification job.
**/
export class TagScopeTerm extends SpeakeasyBase {
  @Metadata({ data: "json, name=comparator" })
  comparator?: JobComparatorEnum;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=tagValues", elemType: shared.TagValuePair })
  tagValues?: TagValuePair[];

  @Metadata({ data: "json, name=target" })
  target?: TagTargetEnum;
}
