import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RobotDeploymentStepEnum } from "./robotdeploymentstepenum";


// ProgressDetail
/** 
 * Information about the progress of a deployment job.
**/
export class ProgressDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentProgress" })
  currentProgress?: RobotDeploymentStepEnum;

  @Metadata({ data: "json, name=estimatedTimeRemainingSeconds" })
  estimatedTimeRemainingSeconds?: number;

  @Metadata({ data: "json, name=percentDone" })
  percentDone?: number;

  @Metadata({ data: "json, name=targetResource" })
  targetResource?: string;
}
