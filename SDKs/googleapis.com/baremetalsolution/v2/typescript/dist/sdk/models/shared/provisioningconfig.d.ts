import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceConfig } from "./instanceconfig";
import { NetworkConfig } from "./networkconfig";
import { VolumeConfig } from "./volumeconfig";
import { InstanceConfigInput } from "./instanceconfig";
import { NetworkConfigInput } from "./networkconfig";
import { VolumeConfigInput } from "./volumeconfig";
export declare enum ProvisioningConfigStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Draft = "DRAFT",
    Submitted = "SUBMITTED",
    Provisioning = "PROVISIONING",
    Provisioned = "PROVISIONED",
    Validated = "VALIDATED",
    Cancelled = "CANCELLED",
    Failed = "FAILED"
}
/**
 * A provisioning configuration.
**/
export declare class ProvisioningConfig extends SpeakeasyBase {
    cloudConsoleUri?: string;
    customId?: string;
    email?: string;
    handoverServiceAccount?: string;
    instances?: InstanceConfig[];
    location?: string;
    name?: string;
    networks?: NetworkConfig[];
    state?: ProvisioningConfigStateEnum;
    statusMessage?: string;
    ticketId?: string;
    updateTime?: string;
    volumes?: VolumeConfig[];
    vpcScEnabled?: boolean;
}
/**
 * A provisioning configuration.
**/
export declare class ProvisioningConfigInput extends SpeakeasyBase {
    customId?: string;
    email?: string;
    handoverServiceAccount?: string;
    instances?: InstanceConfigInput[];
    location?: string;
    networks?: NetworkConfigInput[];
    statusMessage?: string;
    ticketId?: string;
    volumes?: VolumeConfigInput[];
    vpcScEnabled?: boolean;
}
