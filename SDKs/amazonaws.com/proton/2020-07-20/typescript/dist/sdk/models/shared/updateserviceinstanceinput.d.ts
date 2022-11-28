import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentUpdateTypeEnum } from "./deploymentupdatetypeenum";
export declare class UpdateServiceInstanceInput extends SpeakeasyBase {
    deploymentType: DeploymentUpdateTypeEnum;
    name: string;
    serviceName: string;
    spec?: string;
    templateMajorVersion?: string;
    templateMinorVersion?: string;
}
