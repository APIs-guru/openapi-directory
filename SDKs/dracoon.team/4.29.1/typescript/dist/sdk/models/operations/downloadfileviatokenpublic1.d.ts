import { SpeakeasyBase } from "../../../internal/utils";
export declare class DownloadFileViaTokenPublic1PathParams extends SpeakeasyBase {
    accessKey: string;
    token: string;
}
export declare class DownloadFileViaTokenPublic1QueryParams extends SpeakeasyBase {
    genericMimetype?: boolean;
    inline?: boolean;
}
export declare class DownloadFileViaTokenPublic1Headers extends SpeakeasyBase {
    range?: string;
}
export declare class DownloadFileViaTokenPublic1Request extends SpeakeasyBase {
    pathParams: DownloadFileViaTokenPublic1PathParams;
    queryParams: DownloadFileViaTokenPublic1QueryParams;
    headers: DownloadFileViaTokenPublic1Headers;
}
export declare class DownloadFileViaTokenPublic1Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
