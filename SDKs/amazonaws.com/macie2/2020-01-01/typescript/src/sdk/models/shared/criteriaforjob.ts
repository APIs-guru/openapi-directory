import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SimpleCriterionForJob } from "./simplecriterionforjob";
import { TagCriterionForJob } from "./tagcriterionforjob";


// CriteriaForJob
/** 
 * Specifies a property- or tag-based condition that defines criteria for including or excluding S3 buckets from a classification job.
**/
export class CriteriaForJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=simpleCriterion" })
  simpleCriterion?: SimpleCriterionForJob;

  @Metadata({ data: "json, name=tagCriterion" })
  tagCriterion?: TagCriterionForJob;
}
