import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CriteriaForJob } from "./criteriaforjob";


// CriteriaBlockForJob
/** 
 * Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 buckets from a classification job.
**/
export class CriteriaBlockForJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=and", elemType: shared.CriteriaForJob })
  and?: CriteriaForJob[];
}
