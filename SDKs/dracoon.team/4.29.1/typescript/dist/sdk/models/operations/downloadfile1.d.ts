import { SpeakeasyBase } from "../../../internal/utils";
export declare class DownloadFile1PathParams extends SpeakeasyBase {
    fileId: number;
}
export declare class DownloadFile1QueryParams extends SpeakeasyBase {
    genericMimetype?: boolean;
    inline?: boolean;
}
export declare class DownloadFile1Headers extends SpeakeasyBase {
    range?: string;
    xSdsAuthToken?: string;
}
export declare class DownloadFile1Request extends SpeakeasyBase {
    pathParams: DownloadFile1PathParams;
    queryParams: DownloadFile1QueryParams;
    headers: DownloadFile1Headers;
}
export declare class DownloadFile1Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
