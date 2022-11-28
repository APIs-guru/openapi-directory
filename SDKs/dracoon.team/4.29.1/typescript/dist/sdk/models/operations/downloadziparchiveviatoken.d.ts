import { SpeakeasyBase } from "../../../internal/utils";
export declare class DownloadZipArchiveViaTokenPathParams extends SpeakeasyBase {
    token: string;
}
export declare class DownloadZipArchiveViaTokenRequest extends SpeakeasyBase {
    pathParams: DownloadZipArchiveViaTokenPathParams;
}
export declare class DownloadZipArchiveViaTokenResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
