import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AttachedDisk
/** 
 * Describes a block storage disk that is attached to an instance, and is included in an automatic snapshot.
**/
export class AttachedDisk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=sizeInGb" })
  sizeInGb?: number;
}
