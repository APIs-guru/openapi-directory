import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerServicePowerNameEnum } from "./containerservicepowernameenum";
export declare class UpdateContainerServiceRequest extends SpeakeasyBase {
    isDisabled?: boolean;
    power?: ContainerServicePowerNameEnum;
    publicDomainNames?: Map<string, string[]>;
    scale?: number;
    serviceName: string;
}
