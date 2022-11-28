import { SpeakeasyBase } from "../../../internal/utils";
import { CriteriaForJob } from "./criteriaforjob";
/**
 * Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 buckets from a classification job.
**/
export declare class CriteriaBlockForJob extends SpeakeasyBase {
    and?: CriteriaForJob[];
}
