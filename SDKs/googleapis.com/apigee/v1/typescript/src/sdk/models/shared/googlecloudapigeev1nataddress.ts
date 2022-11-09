import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudApigeeV1NatAddressStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Reserved = "RESERVED"
,    Active = "ACTIVE"
,    Deleting = "DELETING"
}


// GoogleCloudApigeeV1NatAddress
/** 
 * Apigee NAT(network address translation) address. A NAT address is a static external IP address used for Internet egress traffic.
**/
export class GoogleCloudApigeeV1NatAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudApigeeV1NatAddressStateEnum;
}
