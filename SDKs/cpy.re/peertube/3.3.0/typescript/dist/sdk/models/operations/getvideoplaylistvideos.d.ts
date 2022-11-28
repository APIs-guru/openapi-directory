import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetVideoPlaylistVideosPathParams extends SpeakeasyBase {
    playlistId: number;
}
export declare class GetVideoPlaylistVideosRequest extends SpeakeasyBase {
    pathParams: GetVideoPlaylistVideosPathParams;
}
export declare class GetVideoPlaylistVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoListResponse?: any;
}
