import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DateRange
/** 
 * The type that defines the fields for a date range.
**/
export class DateRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;
}
