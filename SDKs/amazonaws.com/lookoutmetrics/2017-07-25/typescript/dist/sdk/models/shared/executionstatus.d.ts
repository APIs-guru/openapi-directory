import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AnomalyDetectionTaskStatusEnum } from "./anomalydetectiontaskstatusenum";
/**
 * The status of an anomaly detector run.
**/
export declare class ExecutionStatus extends SpeakeasyBase {
    failureReason?: string;
    status?: AnomalyDetectionTaskStatusEnum;
    timestamp?: string;
}
