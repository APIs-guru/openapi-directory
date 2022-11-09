import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentUpdateTypeEnum } from "./deploymentupdatetypeenum";
export declare class UpdateServicePipelineInput extends SpeakeasyBase {
    deploymentType: DeploymentUpdateTypeEnum;
    serviceName: string;
    spec: string;
    templateMajorVersion?: string;
    templateMinorVersion?: string;
}
