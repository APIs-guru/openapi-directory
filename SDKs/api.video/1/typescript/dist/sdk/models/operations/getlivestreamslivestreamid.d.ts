import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLiveStreamsLiveStreamIdPathParams extends SpeakeasyBase {
    liveStreamId: string;
}
export declare class GetLiveStreamsLiveStreamIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetLiveStreamsLiveStreamIdRequest extends SpeakeasyBase {
    pathParams: GetLiveStreamsLiveStreamIdPathParams;
    security: GetLiveStreamsLiveStreamIdSecurity;
}
export declare class GetLiveStreamsLiveStreamIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    liveStream?: shared.LiveStream;
}
