import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
/**
 * The service instance detail data.
**/
export declare class ServiceInstance extends SpeakeasyBase {
    arn: string;
    createdAt: Date;
    deploymentStatus: DeploymentStatusEnum;
    deploymentStatusMessage?: string;
    environmentName: string;
    lastDeploymentAttemptedAt: Date;
    lastDeploymentSucceededAt: Date;
    name: string;
    serviceName: string;
    spec?: string;
    templateMajorVersion: string;
    templateMinorVersion: string;
    templateName: string;
}
