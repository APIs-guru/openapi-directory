import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVideosVideoIdChaptersLanguagePathParams extends SpeakeasyBase {
    language: string;
    videoId: string;
}
export declare class DeleteVideosVideoIdChaptersLanguageSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class DeleteVideosVideoIdChaptersLanguageRequest extends SpeakeasyBase {
    pathParams: DeleteVideosVideoIdChaptersLanguagePathParams;
    security: DeleteVideosVideoIdChaptersLanguageSecurity;
}
export declare class DeleteVideosVideoIdChaptersLanguageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    notFound?: shared.NotFound;
}
