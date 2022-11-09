import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CriteriaBlockForJob } from "./criteriablockforjob";
import { CriteriaBlockForJob } from "./criteriablockforjob";


// S3BucketCriteriaForJob
/** 
 * Specifies property- and tag-based conditions that define criteria for including or excluding S3 buckets from a classification job. Exclude conditions take precedence over include conditions.
**/
export class S3BucketCriteriaForJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=excludes" })
  excludes?: CriteriaBlockForJob;

  @Metadata({ data: "json, name=includes" })
  includes?: CriteriaBlockForJob;
}
