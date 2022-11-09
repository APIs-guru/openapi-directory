import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SimulationJob } from "./simulationjob";


export class BatchDescribeSimulationJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobs", elemType: shared.SimulationJob })
  jobs?: SimulationJob[];

  @Metadata({ data: "json, name=unprocessedJobs" })
  unprocessedJobs?: string[];
}
