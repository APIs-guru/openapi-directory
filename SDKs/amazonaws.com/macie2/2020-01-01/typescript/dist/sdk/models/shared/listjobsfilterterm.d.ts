import { SpeakeasyBase } from "../../../internal/utils";
import { JobComparatorEnum } from "./jobcomparatorenum";
import { ListJobsFilterKeyEnum } from "./listjobsfilterkeyenum";
/**
 * Specifies a condition that filters the results of a request for information about classification jobs. Each condition consists of a property, an operator, and one or more values.
**/
export declare class ListJobsFilterTerm extends SpeakeasyBase {
    comparator?: JobComparatorEnum;
    key?: ListJobsFilterKeyEnum;
    values?: string[];
}
