import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RegisterVolumeResult
/** 
 * Contains the response to a <code>RegisterVolume</code> request.
**/
export class RegisterVolumeResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=VolumeId" })
  volumeId?: string;
}
