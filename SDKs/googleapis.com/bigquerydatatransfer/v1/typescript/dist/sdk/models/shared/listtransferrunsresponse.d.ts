import { SpeakeasyBase } from "../../../internal/utils";
import { TransferRun } from "./transferrun";
/**
 * The returned list of pipelines in the project.
**/
export declare class ListTransferRunsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    transferRuns?: TransferRun[];
}
