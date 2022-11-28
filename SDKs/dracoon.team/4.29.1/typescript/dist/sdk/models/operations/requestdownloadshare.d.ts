import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestDownloadSharePathParams extends SpeakeasyBase {
    shareId: number;
}
export declare class RequestDownloadShareHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestDownloadShareRequest extends SpeakeasyBase {
    pathParams: RequestDownloadSharePathParams;
    headers: RequestDownloadShareHeaders;
}
export declare class RequestDownloadShareResponse extends SpeakeasyBase {
    contentType: string;
    downloadShare?: shared.DownloadShare;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
