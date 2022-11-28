import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateDownloadSharePathParams extends SpeakeasyBase {
    shareId: number;
}
export declare class UpdateDownloadShareHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class UpdateDownloadShareRequest extends SpeakeasyBase {
    pathParams: UpdateDownloadSharePathParams;
    headers: UpdateDownloadShareHeaders;
    request: shared.UpdateDownloadShareRequest;
}
export declare class UpdateDownloadShareResponse extends SpeakeasyBase {
    contentType: string;
    downloadShare?: shared.DownloadShare;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    updateDownloadShare400ApplicationJsonOneOf?: any;
}
