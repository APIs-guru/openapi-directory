import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TransferRun } from "./transferrun";


// StartManualTransferRunsResponse
/** 
 * A response to start manual transfer runs.
**/
export class StartManualTransferRunsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=runs", elemType: shared.TransferRun })
  runs?: TransferRun[];
}
