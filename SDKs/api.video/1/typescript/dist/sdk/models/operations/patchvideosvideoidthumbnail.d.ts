import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchVideosVideoIdThumbnailPathParams extends SpeakeasyBase {
    videoId: string;
}
export declare class PatchVideosVideoIdThumbnailSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class PatchVideosVideoIdThumbnailRequest extends SpeakeasyBase {
    pathParams: PatchVideosVideoIdThumbnailPathParams;
    request?: shared.VideoThumbnailPickPayload;
    security: PatchVideosVideoIdThumbnailSecurity;
}
export declare class PatchVideosVideoIdThumbnailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    notFound?: shared.NotFound;
    video?: shared.Video;
}
