import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GenerateDownloadUrlPathParams extends SpeakeasyBase {
    fileId: number;
}
export declare class GenerateDownloadUrlHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class GenerateDownloadUrlRequest extends SpeakeasyBase {
    pathParams: GenerateDownloadUrlPathParams;
    headers: GenerateDownloadUrlHeaders;
}
export declare class GenerateDownloadUrlResponse extends SpeakeasyBase {
    contentType: string;
    downloadTokenGenerateResponse?: shared.DownloadTokenGenerateResponse;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
