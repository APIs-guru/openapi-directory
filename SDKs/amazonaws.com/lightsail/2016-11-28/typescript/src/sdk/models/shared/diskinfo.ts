import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DiskInfo
/** 
 * Describes a disk.
**/
export class DiskInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isSystemDisk" })
  isSystemDisk?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=sizeInGb" })
  sizeInGb?: number;
}
