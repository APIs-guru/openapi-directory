import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RobotDeploymentStepEnum } from "./robotdeploymentstepenum";



// ProgressDetail
/** 
 * Information about the progress of a deployment job.
**/
export class ProgressDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentProgress" })
  currentProgress?: RobotDeploymentStepEnum;

  @SpeakeasyMetadata({ data: "json, name=estimatedTimeRemainingSeconds" })
  estimatedTimeRemainingSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=percentDone" })
  percentDone?: number;

  @SpeakeasyMetadata({ data: "json, name=targetResource" })
  targetResource?: string;
}
