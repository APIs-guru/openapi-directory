import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Track } from "./track";


// TracksListResponse
/** 
 * Response listing all tracks.
**/
export class TracksListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=tracks", elemType: shared.Track })
  tracks?: Track[];
}
