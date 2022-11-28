import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVideosVideoIdCaptionsLanguagePathParams extends SpeakeasyBase {
    language: string;
    videoId: string;
}
export declare class DeleteVideosVideoIdCaptionsLanguageSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class DeleteVideosVideoIdCaptionsLanguageRequest extends SpeakeasyBase {
    pathParams: DeleteVideosVideoIdCaptionsLanguagePathParams;
    security: DeleteVideosVideoIdCaptionsLanguageSecurity;
}
export declare class DeleteVideosVideoIdCaptionsLanguageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    notFound?: shared.NotFound;
}
