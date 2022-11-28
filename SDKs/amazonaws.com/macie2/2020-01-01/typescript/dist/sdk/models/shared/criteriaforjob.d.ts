import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleCriterionForJob } from "./simplecriterionforjob";
import { TagCriterionForJob } from "./tagcriterionforjob";
/**
 * Specifies a property- or tag-based condition that defines criteria for including or excluding S3 buckets from a classification job.
**/
export declare class CriteriaForJob extends SpeakeasyBase {
    simpleCriterion?: SimpleCriterionForJob;
    tagCriterion?: TagCriterionForJob;
}
