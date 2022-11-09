import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LogGroupField
/** 
 * The fields contained in log events found by a <code>GetLogGroupFields</code> operation, along with the percentage of queried log events in which each field appears.
**/
export class LogGroupField extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=percent" })
  percent?: number;
}
