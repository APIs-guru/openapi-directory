import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LunMultiprotocolTypeEnum {
    MultiprotocolTypeUnspecified = "MULTIPROTOCOL_TYPE_UNSPECIFIED",
    Linux = "LINUX"
}
export declare enum LunStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Updating = "UPDATING",
    Ready = "READY",
    Deleting = "DELETING"
}
export declare enum LunStorageTypeEnum {
    StorageTypeUnspecified = "STORAGE_TYPE_UNSPECIFIED",
    Ssd = "SSD",
    Hdd = "HDD"
}
/**
 * A storage volume logical unit number (LUN).
**/
export declare class LunInput extends SpeakeasyBase {
    bootLun?: boolean;
    id?: string;
    multiprotocolType?: LunMultiprotocolTypeEnum;
    shareable?: boolean;
    sizeGb?: string;
    state?: LunStateEnum;
    storageType?: LunStorageTypeEnum;
    storageVolume?: string;
    wwid?: string;
}
/**
 * A storage volume logical unit number (LUN).
**/
export declare class Lun extends SpeakeasyBase {
    bootLun?: boolean;
    id?: string;
    multiprotocolType?: LunMultiprotocolTypeEnum;
    name?: string;
    shareable?: boolean;
    sizeGb?: string;
    state?: LunStateEnum;
    storageType?: LunStorageTypeEnum;
    storageVolume?: string;
    wwid?: string;
}
