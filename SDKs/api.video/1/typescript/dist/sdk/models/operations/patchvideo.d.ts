import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchVideoPathParams extends SpeakeasyBase {
    videoId: string;
}
export declare class PatchVideoSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class PatchVideoRequest extends SpeakeasyBase {
    pathParams: PatchVideoPathParams;
    request?: shared.VideoUpdatePayload;
    security: PatchVideoSecurity;
}
export declare class PatchVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    badRequest?: shared.BadRequest;
    notFound?: shared.NotFound;
    video?: shared.Video;
}
