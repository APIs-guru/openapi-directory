import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SimulationJobBatchStatusEnum } from "./simulationjobbatchstatusenum";


// SimulationJobBatchSummary
/** 
 * Information about a simulation job batch.
**/
export class SimulationJobBatchSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=createdRequestCount" })
  createdRequestCount?: number;

  @Metadata({ data: "json, name=failedRequestCount" })
  failedRequestCount?: number;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=pendingRequestCount" })
  pendingRequestCount?: number;

  @Metadata({ data: "json, name=status" })
  status?: SimulationJobBatchStatusEnum;
}
