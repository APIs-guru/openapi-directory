import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Describes the powers that can be specified for an Amazon Lightsail container service.</p> <p>The power specifies the amount of RAM, the number of vCPUs, and the base price of the container service.</p>
**/
export declare class ContainerServicePower extends SpeakeasyBase {
    cpuCount?: number;
    isActive?: boolean;
    name?: string;
    powerId?: string;
    price?: number;
    ramSizeInGb?: number;
}
