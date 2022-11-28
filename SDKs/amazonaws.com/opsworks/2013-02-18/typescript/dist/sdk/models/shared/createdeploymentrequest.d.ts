import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentCommand } from "./deploymentcommand";
export declare class CreateDeploymentRequest extends SpeakeasyBase {
    appId?: string;
    command: DeploymentCommand;
    comment?: string;
    customJson?: string;
    instanceIds?: string[];
    layerIds?: string[];
    stackId: string;
}
