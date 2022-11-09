import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimeInterval
/** 
 * An interval of time, with an absolute start and end.
**/
export class TimeInterval extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
