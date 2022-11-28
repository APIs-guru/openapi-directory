import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";



// OrderFilterCriteria
/** 
 * The type that defines the fields for the order filters.
**/
export class OrderFilterCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDateRange" })
  creationDateRange?: DateRange;

  @SpeakeasyMetadata({ data: "json, name=modifiedDateRange" })
  modifiedDateRange?: DateRange;

  @SpeakeasyMetadata({ data: "json, name=orderStatus" })
  orderStatus?: string;
}
