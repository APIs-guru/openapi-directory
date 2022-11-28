import { SpeakeasyBase } from "../../../internal/utils";
import { SimulationJobStatusEnum } from "./simulationjobstatusenum";
/**
 * Summary information for a simulation job.
**/
export declare class SimulationJobSummary extends SpeakeasyBase {
    arn?: string;
    dataSourceNames?: string[];
    lastUpdatedAt?: Date;
    name?: string;
    robotApplicationNames?: string[];
    simulationApplicationNames?: string[];
    status?: SimulationJobStatusEnum;
}
