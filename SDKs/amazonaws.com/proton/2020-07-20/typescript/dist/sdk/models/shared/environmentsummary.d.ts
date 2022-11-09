import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
import { ProvisioningEnum } from "./provisioningenum";
/**
 * A summary of the environment detail data.
**/
export declare class EnvironmentSummary extends SpeakeasyBase {
    arn: string;
    createdAt: Date;
    deploymentStatus: DeploymentStatusEnum;
    deploymentStatusMessage?: string;
    description?: string;
    environmentAccountConnectionId?: string;
    environmentAccountId?: string;
    lastDeploymentAttemptedAt: Date;
    lastDeploymentSucceededAt: Date;
    name: string;
    protonServiceRoleArn?: string;
    provisioning?: ProvisioningEnum;
    templateMajorVersion: string;
    templateMinorVersion: string;
    templateName: string;
}
