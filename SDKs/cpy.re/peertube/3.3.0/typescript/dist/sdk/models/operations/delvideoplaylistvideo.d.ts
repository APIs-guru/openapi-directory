import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DelVideoPlaylistVideoPathParams extends SpeakeasyBase {
    playlistElementId: number;
    playlistId: number;
}
export declare class DelVideoPlaylistVideoSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DelVideoPlaylistVideoRequest extends SpeakeasyBase {
    pathParams: DelVideoPlaylistVideoPathParams;
    security: DelVideoPlaylistVideoSecurity;
}
export declare class DelVideoPlaylistVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
