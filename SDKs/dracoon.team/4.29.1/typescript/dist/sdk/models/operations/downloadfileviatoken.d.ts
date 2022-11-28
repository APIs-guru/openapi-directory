import { SpeakeasyBase } from "../../../internal/utils";
export declare class DownloadFileViaTokenPathParams extends SpeakeasyBase {
    token: string;
}
export declare class DownloadFileViaTokenQueryParams extends SpeakeasyBase {
    genericMimetype?: boolean;
    inline?: boolean;
}
export declare class DownloadFileViaTokenHeaders extends SpeakeasyBase {
    range?: string;
}
export declare class DownloadFileViaTokenRequest extends SpeakeasyBase {
    pathParams: DownloadFileViaTokenPathParams;
    queryParams: DownloadFileViaTokenQueryParams;
    headers: DownloadFileViaTokenHeaders;
}
export declare class DownloadFileViaTokenResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
