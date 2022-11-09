import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeRange } from "./timerange";


// StartManualTransferRunsRequest
/** 
 * A request to start manual transfer runs.
**/
export class StartManualTransferRunsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestedRunTime" })
  requestedRunTime?: string;

  @Metadata({ data: "json, name=requestedTimeRange" })
  requestedTimeRange?: TimeRange;
}
