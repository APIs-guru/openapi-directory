import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobComparatorEnum } from "./jobcomparatorenum";
import { ScopeFilterKeyEnum } from "./scopefilterkeyenum";



// SimpleScopeTerm
/** 
 * Specifies a property-based condition that determines whether an S3 object is included or excluded from a classification job.
**/
export class SimpleScopeTerm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comparator" })
  comparator?: JobComparatorEnum;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: ScopeFilterKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
