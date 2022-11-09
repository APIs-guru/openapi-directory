import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
/**
 * Information about a fleet.
**/
export declare class Fleet extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    lastDeploymentJob?: string;
    lastDeploymentStatus?: DeploymentStatusEnum;
    lastDeploymentTime?: Date;
    name?: string;
}
