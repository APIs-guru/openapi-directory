import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NfsExportPermissionsEnum {
    PermissionsUnspecified = "PERMISSIONS_UNSPECIFIED",
    ReadOnly = "READ_ONLY",
    ReadWrite = "READ_WRITE"
}
/**
 * A NFS export entry.
**/
export declare class NfsExport extends SpeakeasyBase {
    allowDev?: boolean;
    allowSuid?: boolean;
    cidr?: string;
    machineId?: string;
    networkId?: string;
    noRootSquash?: boolean;
    permissions?: NfsExportPermissionsEnum;
}
