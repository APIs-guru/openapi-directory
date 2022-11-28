import { SpeakeasyBase } from "../../../internal/utils";
import { CriteriaBlockForJob } from "./criteriablockforjob";
/**
 * Specifies property- and tag-based conditions that define criteria for including or excluding S3 buckets from a classification job. Exclude conditions take precedence over include conditions.
**/
export declare class S3BucketCriteriaForJob extends SpeakeasyBase {
    excludes?: CriteriaBlockForJob;
    includes?: CriteriaBlockForJob;
}
