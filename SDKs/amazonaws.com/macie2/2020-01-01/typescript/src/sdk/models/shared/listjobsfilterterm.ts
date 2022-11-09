import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobComparatorEnum } from "./jobcomparatorenum";
import { ListJobsFilterKeyEnum } from "./listjobsfilterkeyenum";


// ListJobsFilterTerm
/** 
 * Specifies a condition that filters the results of a request for information about classification jobs. Each condition consists of a property, an operator, and one or more values.
**/
export class ListJobsFilterTerm extends SpeakeasyBase {
  @Metadata({ data: "json, name=comparator" })
  comparator?: JobComparatorEnum;

  @Metadata({ data: "json, name=key" })
  key?: ListJobsFilterKeyEnum;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
