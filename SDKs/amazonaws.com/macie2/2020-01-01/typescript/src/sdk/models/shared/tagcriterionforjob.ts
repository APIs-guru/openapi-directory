import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobComparatorEnum } from "./jobcomparatorenum";
import { TagCriterionPairForJob } from "./tagcriterionpairforjob";


// TagCriterionForJob
/** 
 * Specifies a tag-based condition that determines whether an S3 bucket is included or excluded from a classification job.
**/
export class TagCriterionForJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=comparator" })
  comparator?: JobComparatorEnum;

  @Metadata({ data: "json, name=tagValues", elemType: shared.TagCriterionPairForJob })
  tagValues?: TagCriterionPairForJob[];
}
