import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReorderVideoPlaylistPathParams extends SpeakeasyBase {
    playlistId: number;
}
export declare class ReorderVideoPlaylistRequestBody extends SpeakeasyBase {
    insertAfterPosition: number;
    reorderLength?: number;
    startPosition: number;
}
export declare class ReorderVideoPlaylistSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class ReorderVideoPlaylistRequest extends SpeakeasyBase {
    pathParams: ReorderVideoPlaylistPathParams;
    request?: ReorderVideoPlaylistRequestBody;
    security: ReorderVideoPlaylistSecurity;
}
export declare class ReorderVideoPlaylistResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
