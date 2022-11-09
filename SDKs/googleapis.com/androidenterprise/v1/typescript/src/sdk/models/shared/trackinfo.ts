import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TrackInfo
/** 
 * Id to name association of a track.
**/
export class TrackInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=trackAlias" })
  trackAlias?: string;

  @Metadata({ data: "json, name=trackId" })
  trackId?: string;
}
