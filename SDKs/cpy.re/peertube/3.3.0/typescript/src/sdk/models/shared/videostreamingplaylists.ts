import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VideoStreamingPlaylistsRedundancies extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseUrl" })
  baseUrl?: string;
}


export class VideoStreamingPlaylists extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=files" })
  files?: any[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=playlistUrl" })
  playlistUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=redundancies", elemType: VideoStreamingPlaylistsRedundancies })
  redundancies?: VideoStreamingPlaylistsRedundancies[];

  @SpeakeasyMetadata({ data: "json, name=segmentsSha256Url" })
  segmentsSha256Url?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}
