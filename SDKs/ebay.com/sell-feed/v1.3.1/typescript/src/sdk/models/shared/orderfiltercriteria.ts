import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DateRange } from "./daterange";
import { DateRange } from "./daterange";


// OrderFilterCriteria
/** 
 * The type that defines the fields for the order filters.
**/
export class OrderFilterCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDateRange" })
  creationDateRange?: DateRange;

  @Metadata({ data: "json, name=modifiedDateRange" })
  modifiedDateRange?: DateRange;

  @Metadata({ data: "json, name=orderStatus" })
  orderStatus?: string;
}
