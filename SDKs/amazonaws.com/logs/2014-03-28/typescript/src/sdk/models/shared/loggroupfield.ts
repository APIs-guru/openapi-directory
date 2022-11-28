import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LogGroupField
/** 
 * The fields contained in log events found by a <code>GetLogGroupFields</code> operation, along with the percentage of queried log events in which each field appears.
**/
export class LogGroupField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=percent" })
  percent?: number;
}
