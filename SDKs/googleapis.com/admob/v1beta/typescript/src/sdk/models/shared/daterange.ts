import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Date } from "./date";
import { Date } from "./date";


// DateRange
/** 
 * Specification of a single date range. Both dates are inclusive.
**/
export class DateRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=startDate" })
  startDate?: Date;
}
