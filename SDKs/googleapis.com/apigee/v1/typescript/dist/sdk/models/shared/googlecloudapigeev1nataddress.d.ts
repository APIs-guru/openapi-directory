import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudApigeeV1NatAddressStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Reserved = "RESERVED",
    Active = "ACTIVE",
    Deleting = "DELETING"
}
/**
 * Apigee NAT(network address translation) address. A NAT address is a static external IP address used for Internet egress traffic.
**/
export declare class GoogleCloudApigeeV1NatAddressInput extends SpeakeasyBase {
    name?: string;
}
/**
 * Apigee NAT(network address translation) address. A NAT address is a static external IP address used for Internet egress traffic.
**/
export declare class GoogleCloudApigeeV1NatAddress extends SpeakeasyBase {
    ipAddress?: string;
    name?: string;
    state?: GoogleCloudApigeeV1NatAddressStateEnum;
}
