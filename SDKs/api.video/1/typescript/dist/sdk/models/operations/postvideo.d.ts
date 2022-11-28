import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostVideoSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class PostVideoRequest extends SpeakeasyBase {
    request?: shared.VideoCreatePayload;
    security: PostVideoSecurity;
}
export declare class PostVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    badRequest?: shared.BadRequest;
    video?: shared.Video;
}
