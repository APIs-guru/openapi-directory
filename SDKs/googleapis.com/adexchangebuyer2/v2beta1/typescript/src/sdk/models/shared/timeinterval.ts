import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimeInterval
/** 
 * An interval of time, with an absolute start and end.
**/
export class TimeInterval extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
