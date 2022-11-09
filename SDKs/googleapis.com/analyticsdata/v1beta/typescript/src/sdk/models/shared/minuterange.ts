import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MinuteRange
/** 
 * A contiguous set of minutes: startMinutesAgo, startMinutesAgo + 1, ..., endMinutesAgo. Requests are allowed up to 2 minute ranges.
**/
export class MinuteRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=endMinutesAgo" })
  endMinutesAgo?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=startMinutesAgo" })
  startMinutesAgo?: number;
}
