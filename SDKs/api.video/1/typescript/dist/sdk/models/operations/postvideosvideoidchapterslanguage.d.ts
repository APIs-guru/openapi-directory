import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostVideosVideoIdChaptersLanguagePathParams extends SpeakeasyBase {
    language: string;
    videoId: string;
}
export declare class PostVideosVideoIdChaptersLanguageSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class PostVideosVideoIdChaptersLanguageRequest extends SpeakeasyBase {
    pathParams: PostVideosVideoIdChaptersLanguagePathParams;
    request?: shared.ChaptersUpdatePayload;
    security: PostVideosVideoIdChaptersLanguageSecurity;
}
export declare class PostVideosVideoIdChaptersLanguageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    badRequest?: shared.BadRequest;
    chapter?: shared.Chapter;
    notFound?: shared.NotFound;
}
