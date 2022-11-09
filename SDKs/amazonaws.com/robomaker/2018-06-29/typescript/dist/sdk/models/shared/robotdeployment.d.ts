import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentJobErrorCodeEnum } from "./deploymentjoberrorcodeenum";
import { ProgressDetail } from "./progressdetail";
import { RobotStatusEnum } from "./robotstatusenum";
/**
 * Information about a robot deployment.
**/
export declare class RobotDeployment extends SpeakeasyBase {
    arn?: string;
    deploymentFinishTime?: Date;
    deploymentStartTime?: Date;
    failureCode?: DeploymentJobErrorCodeEnum;
    failureReason?: string;
    progressDetail?: ProgressDetail;
    status?: RobotStatusEnum;
}
