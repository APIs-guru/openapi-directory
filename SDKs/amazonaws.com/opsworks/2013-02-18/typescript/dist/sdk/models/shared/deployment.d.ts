import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentCommand } from "./deploymentcommand";
/**
 * Describes a deployment of a stack or app.
**/
export declare class Deployment extends SpeakeasyBase {
    appId?: string;
    command?: DeploymentCommand;
    comment?: string;
    completedAt?: string;
    createdAt?: string;
    customJson?: string;
    deploymentId?: string;
    duration?: number;
    iamUserArn?: string;
    instanceIds?: string[];
    stackId?: string;
    status?: string;
}
