import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AllowedClient } from "./allowedclient";

export enum NfsShareStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Provisioned = "PROVISIONED"
,    Creating = "CREATING"
,    Updating = "UPDATING"
,    Deleting = "DELETING"
}

export enum NfsShareStorageTypeEnum {
    StorageTypeUnspecified = "STORAGE_TYPE_UNSPECIFIED"
,    Ssd = "SSD"
,    Hdd = "HDD"
}


// NfsShare
/** 
 * An NFS share.
**/
export class NfsShare extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedClients", elemType: shared.AllowedClient })
  allowedClients?: AllowedClient[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nfsShareId" })
  nfsShareId?: string;

  @Metadata({ data: "json, name=requestedSizeGib" })
  requestedSizeGib?: string;

  @Metadata({ data: "json, name=state" })
  state?: NfsShareStateEnum;

  @Metadata({ data: "json, name=storageType" })
  storageType?: NfsShareStorageTypeEnum;

  @Metadata({ data: "json, name=volume" })
  volume?: string;
}
