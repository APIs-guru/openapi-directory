import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
/**
 * The service pipeline detail data.
**/
export declare class ServicePipeline extends SpeakeasyBase {
    arn: string;
    createdAt: Date;
    deploymentStatus: DeploymentStatusEnum;
    deploymentStatusMessage?: string;
    lastDeploymentAttemptedAt: Date;
    lastDeploymentSucceededAt: Date;
    spec?: string;
    templateMajorVersion: string;
    templateMinorVersion: string;
    templateName: string;
}
