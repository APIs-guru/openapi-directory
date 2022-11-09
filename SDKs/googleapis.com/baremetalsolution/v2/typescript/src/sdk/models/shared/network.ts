import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NetworkMountPoint } from "./networkmountpoint";
import { NetworkAddressReservation } from "./networkaddressreservation";
import { Vrf } from "./vrf";

export enum NetworkStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Provisioning = "PROVISIONING"
,    Provisioned = "PROVISIONED"
,    Deprovisioning = "DEPROVISIONING"
,    Updating = "UPDATING"
}

export enum NetworkTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Client = "CLIENT"
,    Private = "PRIVATE"
}


// Network
/** 
 * A Network.
**/
export class Network extends SpeakeasyBase {
  @Metadata({ data: "json, name=cidr" })
  cidr?: string;

  @Metadata({ data: "json, name=gatewayIp" })
  gatewayIp?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=jumboFramesEnabled" })
  jumboFramesEnabled?: boolean;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=macAddress" })
  macAddress?: string[];

  @Metadata({ data: "json, name=mountPoints", elemType: shared.NetworkMountPoint })
  mountPoints?: NetworkMountPoint[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pod" })
  pod?: string;

  @Metadata({ data: "json, name=reservations", elemType: shared.NetworkAddressReservation })
  reservations?: NetworkAddressReservation[];

  @Metadata({ data: "json, name=servicesCidr" })
  servicesCidr?: string;

  @Metadata({ data: "json, name=state" })
  state?: NetworkStateEnum;

  @Metadata({ data: "json, name=type" })
  type?: NetworkTypeEnum;

  @Metadata({ data: "json, name=vlanId" })
  vlanId?: string;

  @Metadata({ data: "json, name=vrf" })
  vrf?: Vrf;
}
