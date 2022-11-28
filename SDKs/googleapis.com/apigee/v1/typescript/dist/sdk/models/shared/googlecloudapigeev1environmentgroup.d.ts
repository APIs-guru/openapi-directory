import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudApigeeV1EnvironmentGroupStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Updating = "UPDATING"
}
/**
 * EnvironmentGroup configuration. An environment group is used to group one or more Apigee environments under a single host name.
**/
export declare class GoogleCloudApigeeV1EnvironmentGroup extends SpeakeasyBase {
    createdAt?: string;
    hostnames?: string[];
    lastModifiedAt?: string;
    name?: string;
    state?: GoogleCloudApigeeV1EnvironmentGroupStateEnum;
}
/**
 * EnvironmentGroup configuration. An environment group is used to group one or more Apigee environments under a single host name.
**/
export declare class GoogleCloudApigeeV1EnvironmentGroupInput extends SpeakeasyBase {
    hostnames?: string[];
    name?: string;
}
