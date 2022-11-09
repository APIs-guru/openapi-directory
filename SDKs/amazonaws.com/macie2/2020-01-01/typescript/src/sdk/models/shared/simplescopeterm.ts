import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobComparatorEnum } from "./jobcomparatorenum";
import { ScopeFilterKeyEnum } from "./scopefilterkeyenum";


// SimpleScopeTerm
/** 
 * Specifies a property-based condition that determines whether an S3 object is included or excluded from a classification job.
**/
export class SimpleScopeTerm extends SpeakeasyBase {
  @Metadata({ data: "json, name=comparator" })
  comparator?: JobComparatorEnum;

  @Metadata({ data: "json, name=key" })
  key?: ScopeFilterKeyEnum;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
