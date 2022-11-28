import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";



// DateRange
/** 
 * Specification of a single date range. Both dates are inclusive.
**/
export class DateRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;
}
