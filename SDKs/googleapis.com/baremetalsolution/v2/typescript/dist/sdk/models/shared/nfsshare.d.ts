import { SpeakeasyBase } from "../../../internal/utils";
import { AllowedClientInput } from "./allowedclient";
import { AllowedClient } from "./allowedclient";
export declare enum NfsShareStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Provisioned = "PROVISIONED",
    Creating = "CREATING",
    Updating = "UPDATING",
    Deleting = "DELETING"
}
export declare enum NfsShareStorageTypeEnum {
    StorageTypeUnspecified = "STORAGE_TYPE_UNSPECIFIED",
    Ssd = "SSD",
    Hdd = "HDD"
}
/**
 * An NFS share.
**/
export declare class NfsShareInput extends SpeakeasyBase {
    allowedClients?: AllowedClientInput[];
    labels?: Map<string, string>;
    name?: string;
    requestedSizeGib?: string;
    storageType?: NfsShareStorageTypeEnum;
}
/**
 * An NFS share.
**/
export declare class NfsShare extends SpeakeasyBase {
    allowedClients?: AllowedClient[];
    id?: string;
    labels?: Map<string, string>;
    name?: string;
    nfsShareId?: string;
    requestedSizeGib?: string;
    state?: NfsShareStateEnum;
    storageType?: NfsShareStorageTypeEnum;
    volume?: string;
}
