import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Track } from "./track";



// TracksListResponse
/** 
 * Response listing all tracks.
**/
export class TracksListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=tracks", elemType: Track })
  tracks?: Track[];
}
