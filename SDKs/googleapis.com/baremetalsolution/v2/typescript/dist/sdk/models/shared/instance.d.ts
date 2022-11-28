import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBaremetalsolutionV2LogicalInterface } from "./googlecloudbaremetalsolutionv2logicalinterface";
import { LunInput } from "./lun";
import { VolumeInput } from "./volume";
import { Lun } from "./lun";
import { Network } from "./network";
import { Volume } from "./volume";
export declare enum InstanceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Provisioning = "PROVISIONING",
    Running = "RUNNING",
    Deleted = "DELETED",
    Updating = "UPDATING",
    Starting = "STARTING",
    Stopping = "STOPPING",
    Shutdown = "SHUTDOWN"
}
/**
 * A server.
**/
export declare class InstanceInput extends SpeakeasyBase {
    hyperthreadingEnabled?: boolean;
    labels?: Map<string, string>;
    logicalInterfaces?: GoogleCloudBaremetalsolutionV2LogicalInterface[];
    luns?: LunInput[];
    machineType?: string;
    name?: string;
    networkTemplate?: string;
    osImage?: string;
    pod?: string;
    volumes?: VolumeInput[];
}
/**
 * A server.
**/
export declare class Instance extends SpeakeasyBase {
    createTime?: string;
    hyperthreadingEnabled?: boolean;
    id?: string;
    interactiveSerialConsoleEnabled?: boolean;
    labels?: Map<string, string>;
    logicalInterfaces?: GoogleCloudBaremetalsolutionV2LogicalInterface[];
    loginInfo?: string;
    luns?: Lun[];
    machineType?: string;
    name?: string;
    networkTemplate?: string;
    networks?: Network[];
    osImage?: string;
    pod?: string;
    state?: InstanceStateEnum;
    updateTime?: string;
    volumes?: Volume[];
}
