import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LunRange } from "./lunrange";
import { NfsExport } from "./nfsexport";


export enum VolumeConfigProtocolEnum {
    ProtocolUnspecified = "PROTOCOL_UNSPECIFIED",
    ProtocolFc = "PROTOCOL_FC",
    ProtocolNfs = "PROTOCOL_NFS"
}

export enum VolumeConfigTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Flash = "FLASH",
    Disk = "DISK"
}


// VolumeConfig
/** 
 * Configuration parameters for a new volume.
**/
export class VolumeConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=lunRanges", elemType: LunRange })
  lunRanges?: LunRange[];

  @SpeakeasyMetadata({ data: "json, name=machineIds" })
  machineIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=nfsExports", elemType: NfsExport })
  nfsExports?: NfsExport[];

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: VolumeConfigProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=sizeGb" })
  sizeGb?: number;

  @SpeakeasyMetadata({ data: "json, name=snapshotsEnabled" })
  snapshotsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: VolumeConfigTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=userNote" })
  userNote?: string;
}
