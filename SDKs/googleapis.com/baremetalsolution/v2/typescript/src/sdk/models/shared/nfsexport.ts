import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NfsExportPermissionsEnum {
    PermissionsUnspecified = "PERMISSIONS_UNSPECIFIED",
    ReadOnly = "READ_ONLY",
    ReadWrite = "READ_WRITE"
}


// NfsExport
/** 
 * A NFS export entry.
**/
export class NfsExport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowDev" })
  allowDev?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowSuid" })
  allowSuid?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cidr" })
  cidr?: string;

  @SpeakeasyMetadata({ data: "json, name=machineId" })
  machineId?: string;

  @SpeakeasyMetadata({ data: "json, name=networkId" })
  networkId?: string;

  @SpeakeasyMetadata({ data: "json, name=noRootSquash" })
  noRootSquash?: boolean;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: NfsExportPermissionsEnum;
}
