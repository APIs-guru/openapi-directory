import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentJobErrorCodeEnum } from "./deploymentjoberrorcodeenum";
import { ProgressDetail } from "./progressdetail";
import { RobotStatusEnum } from "./robotstatusenum";



// RobotDeployment
/** 
 * Information about a robot deployment.
**/
export class RobotDeployment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentFinishTime" })
  deploymentFinishTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=deploymentStartTime" })
  deploymentStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=failureCode" })
  failureCode?: DeploymentJobErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=progressDetail" })
  progressDetail?: ProgressDetail;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: RobotStatusEnum;
}
