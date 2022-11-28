import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Disk
/** 
 * A new persistent disk or a local ssd. A VM can only have one local SSD setting but multiple local SSD partitions. https://cloud.google.com/compute/docs/disks#pdspecs. https://cloud.google.com/compute/docs/disks#localssds.
**/
export class Disk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=diskInterface" })
  diskInterface?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=sizeGb" })
  sizeGb?: string;

  @SpeakeasyMetadata({ data: "json, name=snapshot" })
  snapshot?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
