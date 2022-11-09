import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TrackRelease } from "./trackrelease";


// Track
/** 
 * A track configuration. The resource for TracksService.
**/
export class Track extends SpeakeasyBase {
  @Metadata({ data: "json, name=releases", elemType: shared.TrackRelease })
  releases?: TrackRelease[];

  @Metadata({ data: "json, name=track" })
  track?: string;
}
