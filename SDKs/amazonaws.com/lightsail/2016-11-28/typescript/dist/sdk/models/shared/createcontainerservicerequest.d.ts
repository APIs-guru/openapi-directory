import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerServiceDeploymentRequest } from "./containerservicedeploymentrequest";
import { ContainerServicePowerNameEnum } from "./containerservicepowernameenum";
import { Tag } from "./tag";
export declare class CreateContainerServiceRequest extends SpeakeasyBase {
    deployment?: ContainerServiceDeploymentRequest;
    power: ContainerServicePowerNameEnum;
    publicDomainNames?: Map<string, string[]>;
    scale: number;
    serviceName: string;
    tags?: Tag[];
}
