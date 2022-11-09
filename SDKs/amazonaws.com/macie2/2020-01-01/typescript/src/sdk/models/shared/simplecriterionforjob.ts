import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobComparatorEnum } from "./jobcomparatorenum";
import { SimpleCriterionKeyForJobEnum } from "./simplecriterionkeyforjobenum";


// SimpleCriterionForJob
/** 
 * Specifies a property-based condition that determines whether an S3 bucket is included or excluded from a classification job.
**/
export class SimpleCriterionForJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=comparator" })
  comparator?: JobComparatorEnum;

  @Metadata({ data: "json, name=key" })
  key?: SimpleCriterionKeyForJobEnum;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
