import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimulationJobBatchSummary } from "./simulationjobbatchsummary";



export class ListSimulationJobBatchesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=simulationJobBatchSummaries", elemType: SimulationJobBatchSummary })
  simulationJobBatchSummaries?: SimulationJobBatchSummary[];
}
