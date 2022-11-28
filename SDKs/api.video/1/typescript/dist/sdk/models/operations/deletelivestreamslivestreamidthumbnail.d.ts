import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteLiveStreamsLiveStreamIdThumbnailPathParams extends SpeakeasyBase {
    liveStreamId: string;
}
export declare class DeleteLiveStreamsLiveStreamIdThumbnailSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class DeleteLiveStreamsLiveStreamIdThumbnailRequest extends SpeakeasyBase {
    pathParams: DeleteLiveStreamsLiveStreamIdThumbnailPathParams;
    security: DeleteLiveStreamsLiveStreamIdThumbnailSecurity;
}
export declare class DeleteLiveStreamsLiveStreamIdThumbnailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    liveStream?: shared.LiveStream;
    notFound?: shared.NotFound;
}
