import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnsubscribeDownloadSharePathParams extends SpeakeasyBase {
    shareId: number;
}
export declare class UnsubscribeDownloadShareHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class UnsubscribeDownloadShareRequest extends SpeakeasyBase {
    pathParams: UnsubscribeDownloadSharePathParams;
    headers: UnsubscribeDownloadShareHeaders;
}
export declare class UnsubscribeDownloadShareResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
