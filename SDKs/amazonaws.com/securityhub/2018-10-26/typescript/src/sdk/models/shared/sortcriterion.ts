import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SortOrderEnum } from "./sortorderenum";


// SortCriterion
/** 
 * A collection of finding attributes used to sort findings.
**/
export class SortCriterion extends SpeakeasyBase {
  @Metadata({ data: "json, name=Field" })
  field?: string;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;
}
