import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SimulationApplicationSummary } from "./simulationapplicationsummary";
export declare class ListSimulationApplicationsResponse extends SpeakeasyBase {
    nextToken?: string;
    simulationApplicationSummaries?: SimulationApplicationSummary[];
}
