import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DiskInfo
/** 
 * Describes a disk.
**/
export class DiskInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=isSystemDisk" })
  isSystemDisk?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=sizeInGb" })
  sizeInGb?: number;
}
