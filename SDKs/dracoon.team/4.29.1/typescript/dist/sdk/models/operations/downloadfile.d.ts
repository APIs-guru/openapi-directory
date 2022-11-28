import { SpeakeasyBase } from "../../../internal/utils";
export declare class DownloadFilePathParams extends SpeakeasyBase {
    fileId: number;
}
export declare class DownloadFileQueryParams extends SpeakeasyBase {
    genericMimetype?: boolean;
    inline?: boolean;
}
export declare class DownloadFileHeaders extends SpeakeasyBase {
    range?: string;
    xSdsAuthToken?: string;
}
export declare class DownloadFileRequest extends SpeakeasyBase {
    pathParams: DownloadFilePathParams;
    queryParams: DownloadFileQueryParams;
    headers: DownloadFileHeaders;
}
export declare class DownloadFileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
