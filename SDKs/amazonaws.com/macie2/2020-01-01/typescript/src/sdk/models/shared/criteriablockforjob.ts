import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CriteriaForJob } from "./criteriaforjob";



// CriteriaBlockForJob
/** 
 * Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 buckets from a classification job.
**/
export class CriteriaBlockForJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=and", elemType: CriteriaForJob })
  and?: CriteriaForJob[];
}
