import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";



// DateFilter
/** 
 * A date filter for querying findings.
**/
export class DateFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DateRange" })
  dateRange?: DateRange;

  @SpeakeasyMetadata({ data: "json, name=End" })
  end?: string;

  @SpeakeasyMetadata({ data: "json, name=Start" })
  start?: string;
}
