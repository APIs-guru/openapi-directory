import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostLiveStreamsSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class PostLiveStreamsRequest extends SpeakeasyBase {
    request?: shared.LiveStreamCreatePayload;
    security: PostLiveStreamsSecurity;
}
export declare class PostLiveStreamsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    badRequest?: shared.BadRequest;
    liveStream?: shared.LiveStream;
}
