import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostVideosVideoIdCaptionsLanguagePathParams extends SpeakeasyBase {
    language: string;
    videoId: string;
}
export declare class PostVideosVideoIdCaptionsLanguageSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class PostVideosVideoIdCaptionsLanguageRequest extends SpeakeasyBase {
    pathParams: PostVideosVideoIdCaptionsLanguagePathParams;
    request?: shared.CaptionsUploadPayload;
    security: PostVideosVideoIdCaptionsLanguageSecurity;
}
export declare class PostVideosVideoIdCaptionsLanguageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    badRequest?: shared.BadRequest;
    notFound?: shared.NotFound;
    subtitle?: shared.Subtitle;
}
