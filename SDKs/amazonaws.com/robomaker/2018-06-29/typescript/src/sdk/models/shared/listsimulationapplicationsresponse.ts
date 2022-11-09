import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SimulationApplicationSummary } from "./simulationapplicationsummary";


export class ListSimulationApplicationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=simulationApplicationSummaries", elemType: shared.SimulationApplicationSummary })
  simulationApplicationSummaries?: SimulationApplicationSummary[];
}
