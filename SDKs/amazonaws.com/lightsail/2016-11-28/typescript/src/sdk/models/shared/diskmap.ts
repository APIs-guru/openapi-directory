import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DiskMap
/** 
 * Describes a block storage disk mapping.
**/
export class DiskMap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=newDiskName" })
  newDiskName?: string;

  @SpeakeasyMetadata({ data: "json, name=originalDiskPath" })
  originalDiskPath?: string;
}
