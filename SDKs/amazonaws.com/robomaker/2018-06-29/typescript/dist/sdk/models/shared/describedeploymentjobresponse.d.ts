import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentApplicationConfig } from "./deploymentapplicationconfig";
import { DeploymentConfig } from "./deploymentconfig";
import { DeploymentJobErrorCodeEnum } from "./deploymentjoberrorcodeenum";
import { RobotDeployment } from "./robotdeployment";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
export declare class DescribeDeploymentJobResponse extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    deploymentApplicationConfigs?: DeploymentApplicationConfig[];
    deploymentConfig?: DeploymentConfig;
    failureCode?: DeploymentJobErrorCodeEnum;
    failureReason?: string;
    fleet?: string;
    robotDeploymentSummary?: RobotDeployment[];
    status?: DeploymentStatusEnum;
    tags?: Map<string, string>;
}
