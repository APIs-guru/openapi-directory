import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AllowedClientInput } from "./allowedclient";
import { AllowedClient } from "./allowedclient";


export enum NfsShareStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Provisioned = "PROVISIONED",
    Creating = "CREATING",
    Updating = "UPDATING",
    Deleting = "DELETING"
}

export enum NfsShareStorageTypeEnum {
    StorageTypeUnspecified = "STORAGE_TYPE_UNSPECIFIED",
    Ssd = "SSD",
    Hdd = "HDD"
}


// NfsShareInput
/** 
 * An NFS share.
**/
export class NfsShareInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedClients", elemType: AllowedClientInput })
  allowedClients?: AllowedClientInput[];

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=requestedSizeGib" })
  requestedSizeGib?: string;

  @SpeakeasyMetadata({ data: "json, name=storageType" })
  storageType?: NfsShareStorageTypeEnum;
}


// NfsShare
/** 
 * An NFS share.
**/
export class NfsShare extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedClients", elemType: AllowedClient })
  allowedClients?: AllowedClient[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nfsShareId" })
  nfsShareId?: string;

  @SpeakeasyMetadata({ data: "json, name=requestedSizeGib" })
  requestedSizeGib?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: NfsShareStateEnum;

  @SpeakeasyMetadata({ data: "json, name=storageType" })
  storageType?: NfsShareStorageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=volume" })
  volume?: string;
}
