import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentApplicationConfig } from "./deploymentapplicationconfig";
import { DeploymentConfig } from "./deploymentconfig";
import { DeploymentJobErrorCodeEnum } from "./deploymentjoberrorcodeenum";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
export declare class SyncDeploymentJobResponse extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    deploymentApplicationConfigs?: DeploymentApplicationConfig[];
    deploymentConfig?: DeploymentConfig;
    failureCode?: DeploymentJobErrorCodeEnum;
    failureReason?: string;
    fleet?: string;
    status?: DeploymentStatusEnum;
}
