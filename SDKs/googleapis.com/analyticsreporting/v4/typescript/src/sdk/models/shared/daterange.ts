import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DateRange
/** 
 * A contiguous set of days: startDate, startDate + 1 day, ..., endDate. The start and end dates are specified in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) date format `YYYY-MM-DD`.
**/
export class DateRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: string;
}
