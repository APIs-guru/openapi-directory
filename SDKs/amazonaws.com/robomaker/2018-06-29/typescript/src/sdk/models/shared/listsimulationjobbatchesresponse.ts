import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SimulationJobBatchSummary } from "./simulationjobbatchsummary";


export class ListSimulationJobBatchesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=simulationJobBatchSummaries", elemType: shared.SimulationJobBatchSummary })
  simulationJobBatchSummaries?: SimulationJobBatchSummary[];
}
