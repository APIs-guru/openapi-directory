import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DateRange } from "./daterange";


// DateFilter
/** 
 * A date filter for querying findings.
**/
export class DateFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=DateRange" })
  dateRange?: DateRange;

  @Metadata({ data: "json, name=End" })
  end?: string;

  @Metadata({ data: "json, name=Start" })
  start?: string;
}
