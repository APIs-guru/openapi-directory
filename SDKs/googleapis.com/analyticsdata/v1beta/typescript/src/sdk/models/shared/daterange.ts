import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DateRange
/** 
 * A contiguous set of days: startDate, startDate + 1, ..., endDate. Requests are allowed up to 4 date ranges.
**/
export class DateRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: string;
}
