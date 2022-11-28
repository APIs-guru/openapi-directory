import { SpeakeasyBase } from "../../../internal/utils";
import { SimulationJobSummary } from "./simulationjobsummary";
export declare class ListSimulationJobsResponse extends SpeakeasyBase {
    nextToken?: string;
    simulationJobSummaries: SimulationJobSummary[];
}
