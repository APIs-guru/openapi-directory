import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceConfig } from "./instanceconfig";
import { NetworkConfig } from "./networkconfig";
import { VolumeConfig } from "./volumeconfig";
/**
 * An provisioning configuration.
**/
export declare class ProvisioningConfig extends SpeakeasyBase {
    instances?: InstanceConfig[];
    networks?: NetworkConfig[];
    ticketId?: string;
    volumes?: VolumeConfig[];
}
