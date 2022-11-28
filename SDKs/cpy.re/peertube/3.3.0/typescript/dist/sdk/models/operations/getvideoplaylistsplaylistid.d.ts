import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetVideoPlaylistsPlaylistIdPathParams extends SpeakeasyBase {
    playlistId: number;
}
export declare class GetVideoPlaylistsPlaylistIdRequest extends SpeakeasyBase {
    pathParams: GetVideoPlaylistsPlaylistIdPathParams;
}
export declare class GetVideoPlaylistsPlaylistIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoPlaylist?: any;
}
