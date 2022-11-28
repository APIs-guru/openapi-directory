import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchVideosVideoIdCaptionsLanguagePathParams extends SpeakeasyBase {
    language: string;
    videoId: string;
}
export declare class PatchVideosVideoIdCaptionsLanguageSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class PatchVideosVideoIdCaptionsLanguageRequest extends SpeakeasyBase {
    pathParams: PatchVideosVideoIdCaptionsLanguagePathParams;
    request?: shared.CaptionsUpdatePayload;
    security: PatchVideosVideoIdCaptionsLanguageSecurity;
}
export declare class PatchVideosVideoIdCaptionsLanguageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    badRequest?: shared.BadRequest;
    notFound?: shared.NotFound;
    subtitle?: shared.Subtitle;
}
