import { SpeakeasyBase } from "../../../internal/utils";
import { LunRange } from "./lunrange";
import { NfsExport } from "./nfsexport";
export declare enum VolumeConfigPerformanceTierEnum {
    VolumePerformanceTierUnspecified = "VOLUME_PERFORMANCE_TIER_UNSPECIFIED",
    VolumePerformanceTierShared = "VOLUME_PERFORMANCE_TIER_SHARED",
    VolumePerformanceTierAssigned = "VOLUME_PERFORMANCE_TIER_ASSIGNED",
    VolumePerformanceTierHt = "VOLUME_PERFORMANCE_TIER_HT"
}
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
export declare class VolumeConfigInput extends SpeakeasyBase {
    gcpService?: string;
    id?: string;
    lunRanges?: LunRange[];
    machineIds?: string[];
    nfsExports?: NfsExport[];
    performanceTier?: VolumeConfigPerformanceTierEnum;
    protocol?: VolumeConfigProtocolEnum;
    sizeGb?: number;
    snapshotsEnabled?: boolean;
    type?: VolumeConfigTypeEnum;
    userNote?: string;
}
/**
 * Configuration parameters for a new volume.
**/
export declare class VolumeConfig extends SpeakeasyBase {
    gcpService?: string;
    id?: string;
    lunRanges?: LunRange[];
    machineIds?: string[];
    name?: string;
    nfsExports?: NfsExport[];
    performanceTier?: VolumeConfigPerformanceTierEnum;
    protocol?: VolumeConfigProtocolEnum;
    sizeGb?: number;
    snapshotsEnabled?: boolean;
    type?: VolumeConfigTypeEnum;
    userNote?: string;
}
