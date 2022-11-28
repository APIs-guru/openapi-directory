import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobComparatorEnum } from "./jobcomparatorenum";
import { ListJobsFilterKeyEnum } from "./listjobsfilterkeyenum";



// ListJobsFilterTerm
/** 
 * Specifies a condition that filters the results of a request for information about classification jobs. Each condition consists of a property, an operator, and one or more values.
**/
export class ListJobsFilterTerm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comparator" })
  comparator?: JobComparatorEnum;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: ListJobsFilterKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
