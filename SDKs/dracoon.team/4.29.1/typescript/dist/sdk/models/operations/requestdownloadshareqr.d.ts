import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestDownloadShareQrPathParams extends SpeakeasyBase {
    shareId: number;
}
export declare class RequestDownloadShareQrHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestDownloadShareQrRequest extends SpeakeasyBase {
    pathParams: RequestDownloadShareQrPathParams;
    headers: RequestDownloadShareQrHeaders;
}
export declare class RequestDownloadShareQrResponse extends SpeakeasyBase {
    contentType: string;
    downloadShare?: shared.DownloadShare;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
