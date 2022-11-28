import { SpeakeasyBase } from "../../../internal/utils";
import { JobComparatorEnum } from "./jobcomparatorenum";
import { SimpleCriterionKeyForJobEnum } from "./simplecriterionkeyforjobenum";
/**
 * Specifies a property-based condition that determines whether an S3 bucket is included or excluded from a classification job.
**/
export declare class SimpleCriterionForJob extends SpeakeasyBase {
    comparator?: JobComparatorEnum;
    key?: SimpleCriterionKeyForJobEnum;
    values?: string[];
}
