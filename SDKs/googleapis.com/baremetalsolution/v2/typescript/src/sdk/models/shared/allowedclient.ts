import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AllowedClientMountPermissionsEnum {
    MountPermissionsUnspecified = "MOUNT_PERMISSIONS_UNSPECIFIED",
    Read = "READ",
    ReadWrite = "READ_WRITE"
}


// AllowedClient
/** 
 * Represents an 'access point' for the share.
**/
export class AllowedClient extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowDev" })
  allowDev?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowSuid" })
  allowSuid?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowedClientsCidr" })
  allowedClientsCidr?: string;

  @SpeakeasyMetadata({ data: "json, name=mountPermissions" })
  mountPermissions?: AllowedClientMountPermissionsEnum;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=nfsPath" })
  nfsPath?: string;

  @SpeakeasyMetadata({ data: "json, name=noRootSquash" })
  noRootSquash?: boolean;

  @SpeakeasyMetadata({ data: "json, name=shareIp" })
  shareIp?: string;
}


// AllowedClientInput
/** 
 * Represents an 'access point' for the share.
**/
export class AllowedClientInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowDev" })
  allowDev?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowSuid" })
  allowSuid?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowedClientsCidr" })
  allowedClientsCidr?: string;

  @SpeakeasyMetadata({ data: "json, name=mountPermissions" })
  mountPermissions?: AllowedClientMountPermissionsEnum;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=noRootSquash" })
  noRootSquash?: boolean;
}
