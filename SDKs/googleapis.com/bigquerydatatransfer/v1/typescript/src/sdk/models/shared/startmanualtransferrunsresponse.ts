import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransferRun } from "./transferrun";



// StartManualTransferRunsResponse
/** 
 * A response to start manual transfer runs.
**/
export class StartManualTransferRunsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=runs", elemType: TransferRun })
  runs?: TransferRun[];
}
