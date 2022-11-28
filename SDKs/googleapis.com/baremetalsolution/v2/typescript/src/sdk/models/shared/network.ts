import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkMountPoint } from "./networkmountpoint";
import { NetworkAddressReservation } from "./networkaddressreservation";
import { Vrf } from "./vrf";


export enum NetworkStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Provisioning = "PROVISIONING",
    Provisioned = "PROVISIONED",
    Deprovisioning = "DEPROVISIONING",
    Updating = "UPDATING"
}

export enum NetworkTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Client = "CLIENT",
    Private = "PRIVATE"
}


// Network
/** 
 * A Network.
**/
export class Network extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cidr" })
  cidr?: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayIp" })
  gatewayIp?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=jumboFramesEnabled" })
  jumboFramesEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=macAddress" })
  macAddress?: string[];

  @SpeakeasyMetadata({ data: "json, name=mountPoints", elemType: NetworkMountPoint })
  mountPoints?: NetworkMountPoint[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pod" })
  pod?: string;

  @SpeakeasyMetadata({ data: "json, name=reservations", elemType: NetworkAddressReservation })
  reservations?: NetworkAddressReservation[];

  @SpeakeasyMetadata({ data: "json, name=servicesCidr" })
  servicesCidr?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: NetworkStateEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: NetworkTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=vlanId" })
  vlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=vrf" })
  vrf?: Vrf;
}
