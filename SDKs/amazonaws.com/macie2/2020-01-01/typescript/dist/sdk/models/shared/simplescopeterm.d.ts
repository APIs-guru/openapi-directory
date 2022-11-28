import { SpeakeasyBase } from "../../../internal/utils";
import { JobComparatorEnum } from "./jobcomparatorenum";
import { ScopeFilterKeyEnum } from "./scopefilterkeyenum";
/**
 * Specifies a property-based condition that determines whether an S3 object is included or excluded from a classification job.
**/
export declare class SimpleScopeTerm extends SpeakeasyBase {
    comparator?: JobComparatorEnum;
    key?: ScopeFilterKeyEnum;
    values?: string[];
}
