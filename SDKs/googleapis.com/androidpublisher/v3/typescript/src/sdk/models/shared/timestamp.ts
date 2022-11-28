import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Timestamp
/** 
 * A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970.
**/
export class Timestamp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nanos" })
  nanos?: number;

  @SpeakeasyMetadata({ data: "json, name=seconds" })
  seconds?: string;
}
