import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchLiveStreamsLiveStreamIdPathParams extends SpeakeasyBase {
    liveStreamId: string;
}
export declare class PatchLiveStreamsLiveStreamIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class PatchLiveStreamsLiveStreamIdRequest extends SpeakeasyBase {
    pathParams: PatchLiveStreamsLiveStreamIdPathParams;
    request?: shared.LiveStreamUpdatePayload;
    security: PatchLiveStreamsLiveStreamIdSecurity;
}
export declare class PatchLiveStreamsLiveStreamIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    badRequest?: shared.BadRequest;
    liveStream?: shared.LiveStream;
}
