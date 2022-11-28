import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RegisterVolumeResult
/** 
 * Contains the response to a <code>RegisterVolume</code> request.
**/
export class RegisterVolumeResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=VolumeId" })
  volumeId?: string;
}
