import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IpAddressAssignmentEnum } from "./ipaddressassignmentenum";
import { PhysicalConnectorTypeEnum } from "./physicalconnectortypeenum";


// PhysicalNetworkInterface
/** 
 * The details about the physical network interface for the device.
**/
export class PhysicalNetworkInterface extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultGateway" })
  defaultGateway?: string;

  @Metadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=ipAddressAssignment" })
  ipAddressAssignment?: IpAddressAssignmentEnum;

  @Metadata({ data: "json, name=macAddress" })
  macAddress?: string;

  @Metadata({ data: "json, name=netmask" })
  netmask?: string;

  @Metadata({ data: "json, name=physicalConnectorType" })
  physicalConnectorType?: PhysicalConnectorTypeEnum;

  @Metadata({ data: "json, name=physicalNetworkInterfaceId" })
  physicalNetworkInterfaceId?: string;
}
