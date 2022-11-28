import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVideoPlaylistsPlaylistIdPathParams extends SpeakeasyBase {
    playlistId: number;
}
export declare class DeleteVideoPlaylistsPlaylistIdSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DeleteVideoPlaylistsPlaylistIdRequest extends SpeakeasyBase {
    pathParams: DeleteVideoPlaylistsPlaylistIdPathParams;
    security: DeleteVideoPlaylistsPlaylistIdSecurity;
}
export declare class DeleteVideoPlaylistsPlaylistIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
