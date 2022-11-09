import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
import { ProvisioningEnum } from "./provisioningenum";
/**
 * The environment detail data. An AWS Proton environment is a set resources shared across an AWS Proton service.
**/
export declare class Environment extends SpeakeasyBase {
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
    spec?: string;
    templateMajorVersion: string;
    templateMinorVersion: string;
    templateName: string;
}
