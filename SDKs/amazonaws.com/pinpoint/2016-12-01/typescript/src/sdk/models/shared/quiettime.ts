import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// QuietTime
/** 
 * Specifies the start and end times that define a time range when messages aren't sent to endpoints.
**/
export class QuietTime extends SpeakeasyBase {
  @Metadata({ data: "json, name=End" })
  end?: string;

  @Metadata({ data: "json, name=Start" })
  start?: string;
}
