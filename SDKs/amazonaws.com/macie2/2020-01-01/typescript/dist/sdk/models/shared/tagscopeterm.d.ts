import { SpeakeasyBase } from "../../../internal/utils";
import { JobComparatorEnum } from "./jobcomparatorenum";
import { TagValuePair } from "./tagvaluepair";
import { TagTargetEnum } from "./tagtargetenum";
/**
 * Specifies a tag-based condition that determines whether an S3 object is included or excluded from a classification job.
**/
export declare class TagScopeTerm extends SpeakeasyBase {
    comparator?: JobComparatorEnum;
    key?: string;
    tagValues?: TagValuePair[];
    target?: TagTargetEnum;
}
