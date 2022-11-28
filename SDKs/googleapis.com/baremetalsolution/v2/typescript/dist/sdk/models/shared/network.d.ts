import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkMountPoint } from "./networkmountpoint";
import { NetworkAddressReservation } from "./networkaddressreservation";
import { Vrf } from "./vrf";
export declare enum NetworkStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Provisioning = "PROVISIONING",
    Provisioned = "PROVISIONED",
    Deprovisioning = "DEPROVISIONING",
    Updating = "UPDATING"
}
export declare enum NetworkTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Client = "CLIENT",
    Private = "PRIVATE"
}
/**
 * A Network.
**/
export declare class Network extends SpeakeasyBase {
    cidr?: string;
    gatewayIp?: string;
    id?: string;
    ipAddress?: string;
    jumboFramesEnabled?: boolean;
    labels?: Map<string, string>;
    macAddress?: string[];
    mountPoints?: NetworkMountPoint[];
    name?: string;
    pod?: string;
    reservations?: NetworkAddressReservation[];
    servicesCidr?: string;
    state?: NetworkStateEnum;
    type?: NetworkTypeEnum;
    vlanId?: string;
    vrf?: Vrf;
}
