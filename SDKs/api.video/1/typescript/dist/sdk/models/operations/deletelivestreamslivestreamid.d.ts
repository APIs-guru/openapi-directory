import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteLiveStreamsLiveStreamIdPathParams extends SpeakeasyBase {
    liveStreamId: string;
}
export declare class DeleteLiveStreamsLiveStreamIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class DeleteLiveStreamsLiveStreamIdRequest extends SpeakeasyBase {
    pathParams: DeleteLiveStreamsLiveStreamIdPathParams;
    security: DeleteLiveStreamsLiveStreamIdSecurity;
}
export declare class DeleteLiveStreamsLiveStreamIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
