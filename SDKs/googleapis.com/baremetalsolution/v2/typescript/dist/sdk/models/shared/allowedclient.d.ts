import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AllowedClientMountPermissionsEnum {
    MountPermissionsUnspecified = "MOUNT_PERMISSIONS_UNSPECIFIED",
    Read = "READ",
    ReadWrite = "READ_WRITE"
}
/**
 * Represents an 'access point' for the share.
**/
export declare class AllowedClient extends SpeakeasyBase {
    allowDev?: boolean;
    allowSuid?: boolean;
    allowedClientsCidr?: string;
    mountPermissions?: AllowedClientMountPermissionsEnum;
    network?: string;
    nfsPath?: string;
    noRootSquash?: boolean;
    shareIp?: string;
}
/**
 * Represents an 'access point' for the share.
**/
export declare class AllowedClientInput extends SpeakeasyBase {
    allowDev?: boolean;
    allowSuid?: boolean;
    allowedClientsCidr?: string;
    mountPermissions?: AllowedClientMountPermissionsEnum;
    network?: string;
    noRootSquash?: boolean;
}
