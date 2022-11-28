import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudApigeeV1InstancePeeringCidrRangeEnum {
    CidrRangeUnspecified = "CIDR_RANGE_UNSPECIFIED",
    Slash16 = "SLASH_16",
    Slash17 = "SLASH_17",
    Slash18 = "SLASH_18",
    Slash19 = "SLASH_19",
    Slash20 = "SLASH_20",
    Slash22 = "SLASH_22",
    Slash23 = "SLASH_23"
}
export declare enum GoogleCloudApigeeV1InstanceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Updating = "UPDATING"
}
/**
 * Apigee runtime instance.
**/
export declare class GoogleCloudApigeeV1Instance extends SpeakeasyBase {
    consumerAcceptList?: string[];
    createdAt?: string;
    description?: string;
    diskEncryptionKeyName?: string;
    displayName?: string;
    host?: string;
    ipRange?: string;
    lastModifiedAt?: string;
    location?: string;
    name?: string;
    peeringCidrRange?: GoogleCloudApigeeV1InstancePeeringCidrRangeEnum;
    port?: string;
    runtimeVersion?: string;
    serviceAttachment?: string;
    state?: GoogleCloudApigeeV1InstanceStateEnum;
}
/**
 * Apigee runtime instance.
**/
export declare class GoogleCloudApigeeV1InstanceInput extends SpeakeasyBase {
    consumerAcceptList?: string[];
    description?: string;
    diskEncryptionKeyName?: string;
    displayName?: string;
    ipRange?: string;
    location?: string;
    name?: string;
    peeringCidrRange?: GoogleCloudApigeeV1InstancePeeringCidrRangeEnum;
}
