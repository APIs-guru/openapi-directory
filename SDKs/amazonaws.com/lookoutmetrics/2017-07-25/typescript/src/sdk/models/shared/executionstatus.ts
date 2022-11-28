import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnomalyDetectionTaskStatusEnum } from "./anomalydetectiontaskstatusenum";



// ExecutionStatus
/** 
 * The status of an anomaly detector run.
**/
export class ExecutionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: AnomalyDetectionTaskStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp?: string;
}
