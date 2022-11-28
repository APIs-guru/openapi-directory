import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrackRelease } from "./trackrelease";



// Track
/** 
 * A track configuration. The resource for TracksService.
**/
export class Track extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=releases", elemType: TrackRelease })
  releases?: TrackRelease[];

  @SpeakeasyMetadata({ data: "json, name=track" })
  track?: string;
}
