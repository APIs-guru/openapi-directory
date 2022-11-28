import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PauseClusterMessage } from "./pauseclustermessage";
import { ResizeClusterMessage } from "./resizeclustermessage";
import { ResumeClusterMessage } from "./resumeclustermessage";



// ScheduledActionType
/** 
 * The action type that specifies an Amazon Redshift API operation that is supported by the Amazon Redshift scheduler. 
**/
export class ScheduledActionType extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pauseCluster?: PauseClusterMessage;

  @SpeakeasyMetadata()
  resizeCluster?: ResizeClusterMessage;

  @SpeakeasyMetadata()
  resumeCluster?: ResumeClusterMessage;
}
