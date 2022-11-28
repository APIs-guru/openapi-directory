import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GenerateDownloadUrlForZipArchiveHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class GenerateDownloadUrlForZipArchiveRequest extends SpeakeasyBase {
    headers: GenerateDownloadUrlForZipArchiveHeaders;
    request: shared.ZipDownloadRequest;
}
export declare class GenerateDownloadUrlForZipArchiveResponse extends SpeakeasyBase {
    contentType: string;
    downloadTokenGenerateResponse?: shared.DownloadTokenGenerateResponse;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
