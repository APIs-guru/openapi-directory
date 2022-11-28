import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimulationJobSummary } from "./simulationjobsummary";



export class ListSimulationJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=simulationJobSummaries", elemType: SimulationJobSummary })
  simulationJobSummaries: SimulationJobSummary[];
}
