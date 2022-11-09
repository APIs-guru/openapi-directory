import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SimulationJobSummary } from "./simulationjobsummary";


export class ListSimulationJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=simulationJobSummaries", elemType: shared.SimulationJobSummary })
  simulationJobSummaries: SimulationJobSummary[];
}
