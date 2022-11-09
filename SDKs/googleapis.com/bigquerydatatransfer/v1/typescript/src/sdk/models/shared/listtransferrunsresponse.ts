import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TransferRun } from "./transferrun";


// ListTransferRunsResponse
/** 
 * The returned list of pipelines in the project.
**/
export class ListTransferRunsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=transferRuns", elemType: shared.TransferRun })
  transferRuns?: TransferRun[];
}
