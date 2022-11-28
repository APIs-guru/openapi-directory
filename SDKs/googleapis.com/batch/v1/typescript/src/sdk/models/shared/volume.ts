import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Gcs } from "./gcs";
import { Nfs } from "./nfs";



// Volume
/** 
 * Volume describes a volume and parameters for it to be mounted to a VM.
**/
export class Volume extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceName" })
  deviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=gcs" })
  gcs?: Gcs;

  @SpeakeasyMetadata({ data: "json, name=mountOptions" })
  mountOptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=mountPath" })
  mountPath?: string;

  @SpeakeasyMetadata({ data: "json, name=nfs" })
  nfs?: Nfs;
}
