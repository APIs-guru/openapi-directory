import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutVideoPlaylistVideoPathParams extends SpeakeasyBase {
    playlistElementId: number;
    playlistId: number;
}
export declare class PutVideoPlaylistVideoRequestBody extends SpeakeasyBase {
    startTimestamp?: number;
    stopTimestamp?: number;
}
export declare class PutVideoPlaylistVideoSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PutVideoPlaylistVideoRequest extends SpeakeasyBase {
    pathParams: PutVideoPlaylistVideoPathParams;
    request?: PutVideoPlaylistVideoRequestBody;
    security: PutVideoPlaylistVideoSecurity;
}
export declare class PutVideoPlaylistVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
