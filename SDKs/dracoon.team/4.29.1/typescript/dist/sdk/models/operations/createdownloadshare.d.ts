import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDownloadShareHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class CreateDownloadShareRequest extends SpeakeasyBase {
    headers: CreateDownloadShareHeaders;
    request: shared.CreateDownloadShareRequest;
}
export declare class CreateDownloadShareResponse extends SpeakeasyBase {
    contentType: string;
    downloadShare?: shared.DownloadShare;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    createDownloadShare400ApplicationJsonOneOf?: any;
}
