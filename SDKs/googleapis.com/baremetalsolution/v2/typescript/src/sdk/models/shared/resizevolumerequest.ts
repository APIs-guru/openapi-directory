import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResizeVolumeRequest
/** 
 * Request for emergency resize Volume.
**/
export class ResizeVolumeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sizeGib" })
  sizeGib?: string;
}
