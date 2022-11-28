import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimulationJobBatchStatusEnum } from "./simulationjobbatchstatusenum";



// SimulationJobBatchSummary
/** 
 * Information about a simulation job batch.
**/
export class SimulationJobBatchSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdRequestCount" })
  createdRequestCount?: number;

  @SpeakeasyMetadata({ data: "json, name=failedRequestCount" })
  failedRequestCount?: number;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=pendingRequestCount" })
  pendingRequestCount?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SimulationJobBatchStatusEnum;
}
