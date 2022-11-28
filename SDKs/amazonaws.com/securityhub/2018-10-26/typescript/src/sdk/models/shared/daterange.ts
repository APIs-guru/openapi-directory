import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DateRangeUnitEnum } from "./daterangeunitenum";



// DateRange
/** 
 * A date range for the date filter.
**/
export class DateRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Unit" })
  unit?: DateRangeUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: number;
}
