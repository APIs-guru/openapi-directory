import { SpeakeasyBase } from "../../../internal/utils";
import { WorkerBlock } from "./workerblock";
export declare class ListWorkerBlocksResponse extends SpeakeasyBase {
    nextToken?: string;
    numResults?: number;
    workerBlocks?: WorkerBlock[];
}
