import { SpeakeasyBase } from "../../../internal/utils";
import { LunRange } from "./lunrange";
import { NfsExport } from "./nfsexport";
export declare enum VolumeConfigProtocolEnum {
    ProtocolUnspecified = "PROTOCOL_UNSPECIFIED",
    ProtocolFc = "PROTOCOL_FC",
    ProtocolNfs = "PROTOCOL_NFS"
}
export declare enum VolumeConfigTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Flash = "FLASH",
    Disk = "DISK"
}
/**
 * Configuration parameters for a new volume.
**/
export declare class VolumeConfig extends SpeakeasyBase {
    id?: string;
    location?: string;
    lunRanges?: LunRange[];
    machineIds?: string[];
    nfsExports?: NfsExport[];
    protocol?: VolumeConfigProtocolEnum;
    sizeGb?: number;
    snapshotsEnabled?: boolean;
    type?: VolumeConfigTypeEnum;
    userNote?: string;
}
