import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentUpdateTypeEnum } from "./deploymentupdatetypeenum";
export declare class UpdateEnvironmentInput extends SpeakeasyBase {
    deploymentType: DeploymentUpdateTypeEnum;
    description?: string;
    environmentAccountConnectionId?: string;
    name: string;
    protonServiceRoleArn?: string;
    spec?: string;
    templateMajorVersion?: string;
    templateMinorVersion?: string;
}
