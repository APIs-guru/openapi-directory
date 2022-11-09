import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentJobErrorCodeEnum } from "./deploymentjoberrorcodeenum";
import { ProgressDetail } from "./progressdetail";
import { RobotStatusEnum } from "./robotstatusenum";


// RobotDeployment
/** 
 * Information about a robot deployment.
**/
export class RobotDeployment extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=deploymentFinishTime" })
  deploymentFinishTime?: Date;

  @Metadata({ data: "json, name=deploymentStartTime" })
  deploymentStartTime?: Date;

  @Metadata({ data: "json, name=failureCode" })
  failureCode?: DeploymentJobErrorCodeEnum;

  @Metadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=progressDetail" })
  progressDetail?: ProgressDetail;

  @Metadata({ data: "json, name=status" })
  status?: RobotStatusEnum;
}
