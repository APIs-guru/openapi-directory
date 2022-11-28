import { SpeakeasyBase } from "../../../internal/utils";
import { JobComparatorEnum } from "./jobcomparatorenum";
import { TagCriterionPairForJob } from "./tagcriterionpairforjob";
/**
 * Specifies a tag-based condition that determines whether an S3 bucket is included or excluded from a classification job.
**/
export declare class TagCriterionForJob extends SpeakeasyBase {
    comparator?: JobComparatorEnum;
    tagValues?: TagCriterionPairForJob[];
}
