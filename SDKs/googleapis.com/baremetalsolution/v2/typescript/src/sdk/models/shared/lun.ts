import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LunMultiprotocolTypeEnum {
    MultiprotocolTypeUnspecified = "MULTIPROTOCOL_TYPE_UNSPECIFIED"
,    Linux = "LINUX"
}

export enum LunStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Updating = "UPDATING"
,    Ready = "READY"
,    Deleting = "DELETING"
}

export enum LunStorageTypeEnum {
    StorageTypeUnspecified = "STORAGE_TYPE_UNSPECIFIED"
,    Ssd = "SSD"
,    Hdd = "HDD"
}


// Lun
/** 
 * A storage volume logical unit number (LUN).
**/
export class Lun extends SpeakeasyBase {
  @Metadata({ data: "json, name=bootLun" })
  bootLun?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=multiprotocolType" })
  multiprotocolType?: LunMultiprotocolTypeEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=shareable" })
  shareable?: boolean;

  @Metadata({ data: "json, name=sizeGb" })
  sizeGb?: string;

  @Metadata({ data: "json, name=state" })
  state?: LunStateEnum;

  @Metadata({ data: "json, name=storageType" })
  storageType?: LunStorageTypeEnum;

  @Metadata({ data: "json, name=storageVolume" })
  storageVolume?: string;

  @Metadata({ data: "json, name=wwid" })
  wwid?: string;
}
