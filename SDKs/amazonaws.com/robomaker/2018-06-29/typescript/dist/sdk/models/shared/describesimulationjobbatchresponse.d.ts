import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BatchPolicy } from "./batchpolicy";
import { SimulationJobSummary } from "./simulationjobsummary";
import { FailedCreateSimulationJobRequest } from "./failedcreatesimulationjobrequest";
import { SimulationJobBatchErrorCodeEnum } from "./simulationjobbatcherrorcodeenum";
import { SimulationJobRequest } from "./simulationjobrequest";
import { SimulationJobBatchStatusEnum } from "./simulationjobbatchstatusenum";
export declare class DescribeSimulationJobBatchResponse extends SpeakeasyBase {
    arn?: string;
    batchPolicy?: BatchPolicy;
    clientRequestToken?: string;
    createdAt?: Date;
    createdRequests?: SimulationJobSummary[];
    failedRequests?: FailedCreateSimulationJobRequest[];
    failureCode?: SimulationJobBatchErrorCodeEnum;
    failureReason?: string;
    lastUpdatedAt?: Date;
    pendingRequests?: SimulationJobRequest[];
    status?: SimulationJobBatchStatusEnum;
    tags?: Map<string, string>;
}
