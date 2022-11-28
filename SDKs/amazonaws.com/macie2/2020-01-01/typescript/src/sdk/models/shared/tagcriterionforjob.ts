import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobComparatorEnum } from "./jobcomparatorenum";
import { TagCriterionPairForJob } from "./tagcriterionpairforjob";



// TagCriterionForJob
/** 
 * Specifies a tag-based condition that determines whether an S3 bucket is included or excluded from a classification job.
**/
export class TagCriterionForJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comparator" })
  comparator?: JobComparatorEnum;

  @SpeakeasyMetadata({ data: "json, name=tagValues", elemType: TagCriterionPairForJob })
  tagValues?: TagCriterionPairForJob[];
}
