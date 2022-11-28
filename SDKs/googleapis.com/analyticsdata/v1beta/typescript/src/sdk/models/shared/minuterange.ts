import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MinuteRange
/** 
 * A contiguous set of minutes: startMinutesAgo, startMinutesAgo + 1, ..., endMinutesAgo. Requests are allowed up to 2 minute ranges.
**/
export class MinuteRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endMinutesAgo" })
  endMinutesAgo?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=startMinutesAgo" })
  startMinutesAgo?: number;
}
