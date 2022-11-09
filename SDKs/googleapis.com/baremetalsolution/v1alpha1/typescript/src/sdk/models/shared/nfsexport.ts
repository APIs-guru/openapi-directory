import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum NfsExportPermissionsEnum {
    PermissionsUnspecified = "PERMISSIONS_UNSPECIFIED"
,    ReadOnly = "READ_ONLY"
,    ReadWrite = "READ_WRITE"
}


// NfsExport
/** 
 * A NFS export entry.
**/
export class NfsExport extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowDev" })
  allowDev?: boolean;

  @Metadata({ data: "json, name=allowSuid" })
  allowSuid?: boolean;

  @Metadata({ data: "json, name=cidr" })
  cidr?: string;

  @Metadata({ data: "json, name=machineId" })
  machineId?: string;

  @Metadata({ data: "json, name=networkId" })
  networkId?: string;

  @Metadata({ data: "json, name=noRootSquash" })
  noRootSquash?: boolean;

  @Metadata({ data: "json, name=permissions" })
  permissions?: NfsExportPermissionsEnum;
}
