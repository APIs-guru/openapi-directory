import { SpeakeasyBase } from "../../../internal/utils";
import { SimulationJob } from "./simulationjob";
export declare class BatchDescribeSimulationJobResponse extends SpeakeasyBase {
    jobs?: SimulationJob[];
    unprocessedJobs?: string[];
}
