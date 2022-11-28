import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SubscribeDownloadSharePathParams extends SpeakeasyBase {
    shareId: number;
}
export declare class SubscribeDownloadShareHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class SubscribeDownloadShareRequest extends SpeakeasyBase {
    pathParams: SubscribeDownloadSharePathParams;
    headers: SubscribeDownloadShareHeaders;
}
export declare class SubscribeDownloadShareResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    subscribedDownloadShare?: shared.SubscribedDownloadShare;
}
