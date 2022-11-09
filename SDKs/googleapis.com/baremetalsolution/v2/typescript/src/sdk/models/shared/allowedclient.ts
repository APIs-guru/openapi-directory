import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AllowedClientMountPermissionsEnum {
    MountPermissionsUnspecified = "MOUNT_PERMISSIONS_UNSPECIFIED"
,    Read = "READ"
,    ReadWrite = "READ_WRITE"
}


// AllowedClient
/** 
 * Represents an 'access point' for the share.
**/
export class AllowedClient extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowDev" })
  allowDev?: boolean;

  @Metadata({ data: "json, name=allowSuid" })
  allowSuid?: boolean;

  @Metadata({ data: "json, name=allowedClientsCidr" })
  allowedClientsCidr?: string;

  @Metadata({ data: "json, name=mountPermissions" })
  mountPermissions?: AllowedClientMountPermissionsEnum;

  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=nfsPath" })
  nfsPath?: string;

  @Metadata({ data: "json, name=noRootSquash" })
  noRootSquash?: boolean;

  @Metadata({ data: "json, name=shareIp" })
  shareIp?: string;
}
