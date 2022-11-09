import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResizeVolumeRequest
/** 
 * Request for emergency resize Volume.
**/
export class ResizeVolumeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=sizeGib" })
  sizeGib?: string;
}
