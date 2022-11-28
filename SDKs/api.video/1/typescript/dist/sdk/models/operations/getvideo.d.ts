import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideoPathParams extends SpeakeasyBase {
    videoId: string;
}
export declare class GetVideoSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetVideoRequest extends SpeakeasyBase {
    pathParams: GetVideoPathParams;
    security: GetVideoSecurity;
}
export declare class GetVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    notFound?: shared.NotFound;
    video?: shared.Video;
}
