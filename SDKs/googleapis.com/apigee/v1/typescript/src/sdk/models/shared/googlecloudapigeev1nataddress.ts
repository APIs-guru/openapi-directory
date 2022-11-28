import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudApigeeV1NatAddressStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Reserved = "RESERVED",
    Active = "ACTIVE",
    Deleting = "DELETING"
}


// GoogleCloudApigeeV1NatAddressInput
/** 
 * Apigee NAT(network address translation) address. A NAT address is a static external IP address used for Internet egress traffic.
**/
export class GoogleCloudApigeeV1NatAddressInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// GoogleCloudApigeeV1NatAddress
/** 
 * Apigee NAT(network address translation) address. A NAT address is a static external IP address used for Internet egress traffic.
**/
export class GoogleCloudApigeeV1NatAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudApigeeV1NatAddressStateEnum;
}
