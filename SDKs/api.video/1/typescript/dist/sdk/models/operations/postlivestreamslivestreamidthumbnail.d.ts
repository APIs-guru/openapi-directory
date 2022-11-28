import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostLiveStreamsLiveStreamIdThumbnailPathParams extends SpeakeasyBase {
    liveStreamId: string;
}
export declare class PostLiveStreamsLiveStreamIdThumbnailSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class PostLiveStreamsLiveStreamIdThumbnailRequest extends SpeakeasyBase {
    pathParams: PostLiveStreamsLiveStreamIdThumbnailPathParams;
    request?: shared.LiveStreamThumbnailUploadPayload;
    security: PostLiveStreamsLiveStreamIdThumbnailSecurity;
}
export declare class PostLiveStreamsLiveStreamIdThumbnailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    badRequest?: shared.BadRequest;
    liveStream?: shared.LiveStream;
    notFound?: shared.NotFound;
}
