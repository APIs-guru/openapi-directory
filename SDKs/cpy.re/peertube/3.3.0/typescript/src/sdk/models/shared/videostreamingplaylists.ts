import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VideoStreamingPlaylistsRedundancies extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseUrl" })
  baseUrl?: string;
}


export class VideoStreamingPlaylists extends SpeakeasyBase {
  @Metadata({ data: "json, name=files" })
  files?: any[];

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=playlistUrl" })
  playlistUrl?: string;

  @Metadata({ data: "json, name=redundancies", elemType: shared.VideoStreamingPlaylistsRedundancies })
  redundancies?: VideoStreamingPlaylistsRedundancies[];

  @Metadata({ data: "json, name=segmentsSha256Url" })
  segmentsSha256Url?: string;

  @Metadata({ data: "json, name=type" })
  type?: number;
}
