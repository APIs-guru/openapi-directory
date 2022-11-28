import { SpeakeasyBase } from "../../../internal/utils";
export declare class DownloadFileViaTokenPublicPathParams extends SpeakeasyBase {
    accessKey: string;
    token: string;
}
export declare class DownloadFileViaTokenPublicQueryParams extends SpeakeasyBase {
    genericMimetype?: boolean;
    inline?: boolean;
}
export declare class DownloadFileViaTokenPublicHeaders extends SpeakeasyBase {
    range?: string;
}
export declare class DownloadFileViaTokenPublicRequest extends SpeakeasyBase {
    pathParams: DownloadFileViaTokenPublicPathParams;
    queryParams: DownloadFileViaTokenPublicQueryParams;
    headers: DownloadFileViaTokenPublicHeaders;
}
export declare class DownloadFileViaTokenPublicResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
