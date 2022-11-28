import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CriteriaBlockForJob } from "./criteriablockforjob";



// S3BucketCriteriaForJob
/** 
 * Specifies property- and tag-based conditions that define criteria for including or excluding S3 buckets from a classification job. Exclude conditions take precedence over include conditions.
**/
export class S3BucketCriteriaForJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=excludes" })
  excludes?: CriteriaBlockForJob;

  @SpeakeasyMetadata({ data: "json, name=includes" })
  includes?: CriteriaBlockForJob;
}
