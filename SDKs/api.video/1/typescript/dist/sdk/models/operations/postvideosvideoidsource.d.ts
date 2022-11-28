import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostVideosVideoIdSourcePathParams extends SpeakeasyBase {
    videoId: string;
}
export declare class PostVideosVideoIdSourceHeaders extends SpeakeasyBase {
    contentRange?: string;
}
export declare class PostVideosVideoIdSourceSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class PostVideosVideoIdSourceRequest extends SpeakeasyBase {
    pathParams: PostVideosVideoIdSourcePathParams;
    headers: PostVideosVideoIdSourceHeaders;
    request?: shared.VideoUploadPayload;
    security: PostVideosVideoIdSourceSecurity;
}
export declare class PostVideosVideoIdSourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    badRequest?: shared.BadRequest;
    notFound?: shared.NotFound;
    video?: shared.Video;
}
