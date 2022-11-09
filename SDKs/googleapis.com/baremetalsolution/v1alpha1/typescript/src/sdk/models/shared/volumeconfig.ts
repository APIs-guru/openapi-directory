import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LunRange } from "./lunrange";
import { NfsExport } from "./nfsexport";

export enum VolumeConfigProtocolEnum {
    ProtocolUnspecified = "PROTOCOL_UNSPECIFIED"
,    ProtocolFc = "PROTOCOL_FC"
,    ProtocolNfs = "PROTOCOL_NFS"
}

export enum VolumeConfigTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Flash = "FLASH"
,    Disk = "DISK"
}


// VolumeConfig
/** 
 * Configuration parameters for a new volume.
**/
export class VolumeConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=lunRanges", elemType: shared.LunRange })
  lunRanges?: LunRange[];

  @Metadata({ data: "json, name=machineIds" })
  machineIds?: string[];

  @Metadata({ data: "json, name=nfsExports", elemType: shared.NfsExport })
  nfsExports?: NfsExport[];

  @Metadata({ data: "json, name=protocol" })
  protocol?: VolumeConfigProtocolEnum;

  @Metadata({ data: "json, name=sizeGb" })
  sizeGb?: number;

  @Metadata({ data: "json, name=snapshotsEnabled" })
  snapshotsEnabled?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: VolumeConfigTypeEnum;

  @Metadata({ data: "json, name=userNote" })
  userNote?: string;
}
