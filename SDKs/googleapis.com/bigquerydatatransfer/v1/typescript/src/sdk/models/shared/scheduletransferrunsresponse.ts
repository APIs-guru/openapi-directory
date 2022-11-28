import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransferRun } from "./transferrun";



// ScheduleTransferRunsResponse
/** 
 * A response to schedule transfer runs for a time range.
**/
export class ScheduleTransferRunsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=runs", elemType: TransferRun })
  runs?: TransferRun[];
}
