import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeRange } from "./timerange";



// StartManualTransferRunsRequest
/** 
 * A request to start manual transfer runs.
**/
export class StartManualTransferRunsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestedRunTime" })
  requestedRunTime?: string;

  @SpeakeasyMetadata({ data: "json, name=requestedTimeRange" })
  requestedTimeRange?: TimeRange;
}
