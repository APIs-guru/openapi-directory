import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobComparatorEnum } from "./jobcomparatorenum";
import { SimpleCriterionKeyForJobEnum } from "./simplecriterionkeyforjobenum";



// SimpleCriterionForJob
/** 
 * Specifies a property-based condition that determines whether an S3 bucket is included or excluded from a classification job.
**/
export class SimpleCriterionForJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comparator" })
  comparator?: JobComparatorEnum;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: SimpleCriterionKeyForJobEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
