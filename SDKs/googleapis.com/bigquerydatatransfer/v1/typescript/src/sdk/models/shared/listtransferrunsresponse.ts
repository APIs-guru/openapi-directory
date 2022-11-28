import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransferRun } from "./transferrun";



// ListTransferRunsResponse
/** 
 * The returned list of pipelines in the project.
**/
export class ListTransferRunsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=transferRuns", elemType: TransferRun })
  transferRuns?: TransferRun[];
}
