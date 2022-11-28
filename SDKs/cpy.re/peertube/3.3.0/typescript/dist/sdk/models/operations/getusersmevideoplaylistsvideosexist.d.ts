import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersMeVideoPlaylistsVideosExistQueryParams extends SpeakeasyBase {
    videoIds: number[];
}
export declare class GetUsersMeVideoPlaylistsVideosExistSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetUsersMeVideoPlaylistsVideosExist200ApplicationJsonVideoId extends SpeakeasyBase {
    playlistElementId?: number;
    playlistId?: number;
    startTimestamp?: number;
    stopTimestamp?: number;
}
export declare class GetUsersMeVideoPlaylistsVideosExist200ApplicationJson extends SpeakeasyBase {
    videoId?: GetUsersMeVideoPlaylistsVideosExist200ApplicationJsonVideoId[];
}
export declare class GetUsersMeVideoPlaylistsVideosExistRequest extends SpeakeasyBase {
    queryParams: GetUsersMeVideoPlaylistsVideosExistQueryParams;
    security: GetUsersMeVideoPlaylistsVideosExistSecurity;
}
export declare class GetUsersMeVideoPlaylistsVideosExistResponse extends SpeakeasyBase {
    contentType: string;
    getUsersMeVideoPlaylistsVideosExist200ApplicationJsonObject?: GetUsersMeVideoPlaylistsVideosExist200ApplicationJson;
    statusCode: number;
}
