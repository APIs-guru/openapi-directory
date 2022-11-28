import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostVideosVideoIdThumbnailPathParams extends SpeakeasyBase {
    videoId: string;
}
export declare class PostVideosVideoIdThumbnailSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class PostVideosVideoIdThumbnailRequest extends SpeakeasyBase {
    pathParams: PostVideosVideoIdThumbnailPathParams;
    request?: shared.VideoThumbnailUploadPayload;
    security: PostVideosVideoIdThumbnailSecurity;
}
export declare class PostVideosVideoIdThumbnailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    badRequest?: shared.BadRequest;
    notFound?: shared.NotFound;
    video?: shared.Video;
}
