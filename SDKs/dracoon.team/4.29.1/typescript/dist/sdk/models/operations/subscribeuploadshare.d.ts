import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SubscribeUploadSharePathParams extends SpeakeasyBase {
    shareId: number;
}
export declare class SubscribeUploadShareHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class SubscribeUploadShareRequest extends SpeakeasyBase {
    pathParams: SubscribeUploadSharePathParams;
    headers: SubscribeUploadShareHeaders;
}
export declare class SubscribeUploadShareResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    subscribedUploadShare?: shared.SubscribedUploadShare;
}
