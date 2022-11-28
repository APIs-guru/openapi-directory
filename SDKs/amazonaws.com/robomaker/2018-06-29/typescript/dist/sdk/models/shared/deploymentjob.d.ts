import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentApplicationConfig } from "./deploymentapplicationconfig";
import { DeploymentConfig } from "./deploymentconfig";
import { DeploymentJobErrorCodeEnum } from "./deploymentjoberrorcodeenum";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
/**
 * Information about a deployment job.
**/
export declare class DeploymentJob extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    deploymentApplicationConfigs?: DeploymentApplicationConfig[];
    deploymentConfig?: DeploymentConfig;
    failureCode?: DeploymentJobErrorCodeEnum;
    failureReason?: string;
    fleet?: string;
    status?: DeploymentStatusEnum;
}
