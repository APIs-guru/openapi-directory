import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DownloadZipArchiveHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class DownloadZipArchiveRequest extends SpeakeasyBase {
    headers: DownloadZipArchiveHeaders;
    request: shared.ZipDownloadRequest;
}
export declare class DownloadZipArchiveResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
