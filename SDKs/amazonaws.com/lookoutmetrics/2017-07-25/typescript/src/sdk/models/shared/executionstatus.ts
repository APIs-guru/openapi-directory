import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AnomalyDetectionTaskStatusEnum } from "./anomalydetectiontaskstatusenum";


// ExecutionStatus
/** 
 * The status of an anomaly detector run.
**/
export class ExecutionStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=Status" })
  status?: AnomalyDetectionTaskStatusEnum;

  @Metadata({ data: "json, name=Timestamp" })
  timestamp?: string;
}
