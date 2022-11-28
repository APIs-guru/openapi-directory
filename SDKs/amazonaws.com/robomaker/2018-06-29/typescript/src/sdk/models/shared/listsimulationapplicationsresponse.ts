import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimulationApplicationSummary } from "./simulationapplicationsummary";



export class ListSimulationApplicationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=simulationApplicationSummaries", elemType: SimulationApplicationSummary })
  simulationApplicationSummaries?: SimulationApplicationSummary[];
}
