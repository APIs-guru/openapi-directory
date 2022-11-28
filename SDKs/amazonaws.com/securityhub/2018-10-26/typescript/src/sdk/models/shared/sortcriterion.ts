import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SortOrderEnum } from "./sortorderenum";



// SortCriterion
/** 
 * A collection of finding attributes used to sort findings.
**/
export class SortCriterion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;
}
