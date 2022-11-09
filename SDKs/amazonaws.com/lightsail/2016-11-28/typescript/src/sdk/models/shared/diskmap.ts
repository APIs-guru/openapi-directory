import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DiskMap
/** 
 * Describes a block storage disk mapping.
**/
export class DiskMap extends SpeakeasyBase {
  @Metadata({ data: "json, name=newDiskName" })
  newDiskName?: string;

  @Metadata({ data: "json, name=originalDiskPath" })
  originalDiskPath?: string;
}
