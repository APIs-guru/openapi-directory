import { SpeakeasyBase } from "../../../internal/utils";
import { PauseClusterMessage } from "./pauseclustermessage";
import { ResizeClusterMessage } from "./resizeclustermessage";
import { ResumeClusterMessage } from "./resumeclustermessage";
/**
 * The action type that specifies an Amazon Redshift API operation that is supported by the Amazon Redshift scheduler.
**/
export declare class ScheduledActionType extends SpeakeasyBase {
    pauseCluster?: PauseClusterMessage;
    resizeCluster?: ResizeClusterMessage;
    resumeCluster?: ResumeClusterMessage;
}
