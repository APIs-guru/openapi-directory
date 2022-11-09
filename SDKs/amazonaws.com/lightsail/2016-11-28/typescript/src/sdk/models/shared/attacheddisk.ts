import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AttachedDisk
/** 
 * Describes a block storage disk that is attached to an instance, and is included in an automatic snapshot.
**/
export class AttachedDisk extends SpeakeasyBase {
  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=sizeInGb" })
  sizeInGb?: number;
}
