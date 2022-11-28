import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpAddressAssignmentEnum } from "./ipaddressassignmentenum";
import { PhysicalConnectorTypeEnum } from "./physicalconnectortypeenum";



// PhysicalNetworkInterface
/** 
 * The details about the physical network interface for the device.
**/
export class PhysicalNetworkInterface extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultGateway" })
  defaultGateway?: string;

  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=ipAddressAssignment" })
  ipAddressAssignment?: IpAddressAssignmentEnum;

  @SpeakeasyMetadata({ data: "json, name=macAddress" })
  macAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=netmask" })
  netmask?: string;

  @SpeakeasyMetadata({ data: "json, name=physicalConnectorType" })
  physicalConnectorType?: PhysicalConnectorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=physicalNetworkInterfaceId" })
  physicalNetworkInterfaceId?: string;
}
