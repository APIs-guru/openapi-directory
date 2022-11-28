import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideosVideoIdChaptersLanguagePathParams extends SpeakeasyBase {
    language: string;
    videoId: string;
}
export declare class GetVideosVideoIdChaptersLanguageSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetVideosVideoIdChaptersLanguageRequest extends SpeakeasyBase {
    pathParams: GetVideosVideoIdChaptersLanguagePathParams;
    security: GetVideosVideoIdChaptersLanguageSecurity;
}
export declare class GetVideosVideoIdChaptersLanguageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    chapter?: shared.Chapter;
    notFound?: shared.NotFound;
}
