import { SpeakeasyBase } from "../../../internal/utils";
export declare class DownloadFileViaToken1PathParams extends SpeakeasyBase {
    token: string;
}
export declare class DownloadFileViaToken1QueryParams extends SpeakeasyBase {
    genericMimetype?: boolean;
    inline?: boolean;
}
export declare class DownloadFileViaToken1Headers extends SpeakeasyBase {
    range?: string;
}
export declare class DownloadFileViaToken1Request extends SpeakeasyBase {
    pathParams: DownloadFileViaToken1PathParams;
    queryParams: DownloadFileViaToken1QueryParams;
    headers: DownloadFileViaToken1Headers;
}
export declare class DownloadFileViaToken1Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
