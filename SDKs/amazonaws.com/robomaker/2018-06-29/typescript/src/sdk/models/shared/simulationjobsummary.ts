import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimulationJobStatusEnum } from "./simulationjobstatusenum";



// SimulationJobSummary
/** 
 * Summary information for a simulation job.
**/
export class SimulationJobSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=dataSourceNames" })
  dataSourceNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=robotApplicationNames" })
  robotApplicationNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=simulationApplicationNames" })
  simulationApplicationNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SimulationJobStatusEnum;
}
