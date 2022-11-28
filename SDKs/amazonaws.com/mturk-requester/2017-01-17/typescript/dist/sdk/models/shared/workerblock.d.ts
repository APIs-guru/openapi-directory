import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  The WorkerBlock data structure represents a Worker who has been blocked. It has two elements: the WorkerId and the Reason for the block.
**/
export declare class WorkerBlock extends SpeakeasyBase {
    reason?: string;
    workerId?: string;
}
