import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TransferRun } from "./transferrun";


// ScheduleTransferRunsResponse
/** 
 * A response to schedule transfer runs for a time range.
**/
export class ScheduleTransferRunsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=runs", elemType: shared.TransferRun })
  runs?: TransferRun[];
}
