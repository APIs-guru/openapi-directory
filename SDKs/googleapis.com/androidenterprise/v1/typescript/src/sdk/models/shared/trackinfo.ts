import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrackInfo
/** 
 * Id to name association of a track.
**/
export class TrackInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=trackAlias" })
  trackAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=trackId" })
  trackId?: string;
}
