import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DateRange
/** 
 * A contiguous set of days: startDate, startDate + 1, ..., endDate. Requests are allowed up to 4 date ranges.
**/
export class DateRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=endDate" })
  endDate?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=startDate" })
  startDate?: string;
}
