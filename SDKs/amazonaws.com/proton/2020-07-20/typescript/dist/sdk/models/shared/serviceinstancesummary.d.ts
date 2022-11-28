import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
/**
 * A summary of the service instance detail data.
**/
export declare class ServiceInstanceSummary extends SpeakeasyBase {
    arn: string;
    createdAt: Date;
    deploymentStatus: DeploymentStatusEnum;
    deploymentStatusMessage?: string;
    environmentName: string;
    lastDeploymentAttemptedAt: Date;
    lastDeploymentSucceededAt: Date;
    name: string;
    serviceName: string;
    templateMajorVersion: string;
    templateMinorVersion: string;
    templateName: string;
}
