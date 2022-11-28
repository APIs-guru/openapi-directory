import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DateRange
/** 
 * The type that defines the fields for a date range.
**/
export class DateRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}
