import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SimulationJobBatchStatusEnum } from "./simulationjobbatchstatusenum";
/**
 * Information about a simulation job batch.
**/
export declare class SimulationJobBatchSummary extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    createdRequestCount?: number;
    failedRequestCount?: number;
    lastUpdatedAt?: Date;
    pendingRequestCount?: number;
    status?: SimulationJobBatchStatusEnum;
}
