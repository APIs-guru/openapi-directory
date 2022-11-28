import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QuietTime
/** 
 * Specifies the start and end times that define a time range when messages aren't sent to endpoints.
**/
export class QuietTime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=End" })
  end?: string;

  @SpeakeasyMetadata({ data: "json, name=Start" })
  start?: string;
}
