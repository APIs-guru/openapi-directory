import { SpeakeasyBase } from "../../../internal/utils";
export declare class VideoStreamingPlaylistsRedundancies extends SpeakeasyBase {
    baseUrl?: string;
}
export declare class VideoStreamingPlaylists extends SpeakeasyBase {
    files?: any[];
    id?: number;
    playlistUrl?: string;
    redundancies?: VideoStreamingPlaylistsRedundancies[];
    segmentsSha256Url?: string;
    type?: number;
}
