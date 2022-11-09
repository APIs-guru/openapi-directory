import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SimulationJobStatusEnum } from "./simulationjobstatusenum";


// SimulationJobSummary
/** 
 * Summary information for a simulation job.
**/
export class SimulationJobSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=dataSourceNames" })
  dataSourceNames?: string[];

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=robotApplicationNames" })
  robotApplicationNames?: string[];

  @Metadata({ data: "json, name=simulationApplicationNames" })
  simulationApplicationNames?: string[];

  @Metadata({ data: "json, name=status" })
  status?: SimulationJobStatusEnum;
}
