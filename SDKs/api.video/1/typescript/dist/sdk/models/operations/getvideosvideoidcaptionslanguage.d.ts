import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideosVideoIdCaptionsLanguagePathParams extends SpeakeasyBase {
    language: string;
    videoId: string;
}
export declare class GetVideosVideoIdCaptionsLanguageSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetVideosVideoIdCaptionsLanguageRequest extends SpeakeasyBase {
    pathParams: GetVideosVideoIdCaptionsLanguagePathParams;
    security: GetVideosVideoIdCaptionsLanguageSecurity;
}
export declare class GetVideosVideoIdCaptionsLanguageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    notFound?: shared.NotFound;
    subtitle?: shared.Subtitle;
}
