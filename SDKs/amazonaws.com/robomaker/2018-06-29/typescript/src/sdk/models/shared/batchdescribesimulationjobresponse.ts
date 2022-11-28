import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimulationJob } from "./simulationjob";



export class BatchDescribeSimulationJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobs", elemType: SimulationJob })
  jobs?: SimulationJob[];

  @SpeakeasyMetadata({ data: "json, name=unprocessedJobs" })
  unprocessedJobs?: string[];
}
