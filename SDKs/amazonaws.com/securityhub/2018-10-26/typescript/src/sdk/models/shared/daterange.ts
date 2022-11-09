import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DateRangeUnitEnum } from "./daterangeunitenum";


// DateRange
/** 
 * A date range for the date filter.
**/
export class DateRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=Unit" })
  unit?: DateRangeUnitEnum;

  @Metadata({ data: "json, name=Value" })
  value?: number;
}
