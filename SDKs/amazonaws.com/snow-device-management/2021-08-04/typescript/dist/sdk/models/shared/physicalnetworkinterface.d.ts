import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IpAddressAssignmentEnum } from "./ipaddressassignmentenum";
import { PhysicalConnectorTypeEnum } from "./physicalconnectortypeenum";
/**
 * The details about the physical network interface for the device.
**/
export declare class PhysicalNetworkInterface extends SpeakeasyBase {
    defaultGateway?: string;
    ipAddress?: string;
    ipAddressAssignment?: IpAddressAssignmentEnum;
    macAddress?: string;
    netmask?: string;
    physicalConnectorType?: PhysicalConnectorTypeEnum;
    physicalNetworkInterfaceId?: string;
}
