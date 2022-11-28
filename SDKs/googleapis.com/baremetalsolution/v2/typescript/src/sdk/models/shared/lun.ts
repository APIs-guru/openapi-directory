import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LunMultiprotocolTypeEnum {
    MultiprotocolTypeUnspecified = "MULTIPROTOCOL_TYPE_UNSPECIFIED",
    Linux = "LINUX"
}

export enum LunStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Updating = "UPDATING",
    Ready = "READY",
    Deleting = "DELETING"
}

export enum LunStorageTypeEnum {
    StorageTypeUnspecified = "STORAGE_TYPE_UNSPECIFIED",
    Ssd = "SSD",
    Hdd = "HDD"
}


// LunInput
/** 
 * A storage volume logical unit number (LUN).
**/
export class LunInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bootLun" })
  bootLun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=multiprotocolType" })
  multiprotocolType?: LunMultiprotocolTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=shareable" })
  shareable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sizeGb" })
  sizeGb?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: LunStateEnum;

  @SpeakeasyMetadata({ data: "json, name=storageType" })
  storageType?: LunStorageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=storageVolume" })
  storageVolume?: string;

  @SpeakeasyMetadata({ data: "json, name=wwid" })
  wwid?: string;
}


// Lun
/** 
 * A storage volume logical unit number (LUN).
**/
export class Lun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bootLun" })
  bootLun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=multiprotocolType" })
  multiprotocolType?: LunMultiprotocolTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=shareable" })
  shareable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sizeGb" })
  sizeGb?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: LunStateEnum;

  @SpeakeasyMetadata({ data: "json, name=storageType" })
  storageType?: LunStorageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=storageVolume" })
  storageVolume?: string;

  @SpeakeasyMetadata({ data: "json, name=wwid" })
  wwid?: string;
}
