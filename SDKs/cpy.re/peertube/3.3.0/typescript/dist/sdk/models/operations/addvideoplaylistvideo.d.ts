import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddVideoPlaylistVideoPathParams extends SpeakeasyBase {
    playlistId: number;
}
export declare class AddVideoPlaylistVideoRequestBody extends SpeakeasyBase {
    startTimestamp?: number;
    stopTimestamp?: number;
    videoId: any;
}
export declare class AddVideoPlaylistVideoSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class AddVideoPlaylistVideo200ApplicationJsonVideoPlaylistElement extends SpeakeasyBase {
    id?: number;
}
export declare class AddVideoPlaylistVideo200ApplicationJson extends SpeakeasyBase {
    videoPlaylistElement?: AddVideoPlaylistVideo200ApplicationJsonVideoPlaylistElement;
}
export declare class AddVideoPlaylistVideoRequest extends SpeakeasyBase {
    pathParams: AddVideoPlaylistVideoPathParams;
    request?: AddVideoPlaylistVideoRequestBody;
    security: AddVideoPlaylistVideoSecurity;
}
export declare class AddVideoPlaylistVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    addVideoPlaylistVideo200ApplicationJsonObject?: AddVideoPlaylistVideo200ApplicationJson;
}
