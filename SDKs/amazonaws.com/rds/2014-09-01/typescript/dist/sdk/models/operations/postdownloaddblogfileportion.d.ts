import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDownloadDbLogFilePortionActionEnum {
    DownloadDbLogFilePortion = "DownloadDBLogFilePortion"
}
export declare enum PostDownloadDbLogFilePortionVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class PostDownloadDbLogFilePortionQueryParams extends SpeakeasyBase {
    action: PostDownloadDbLogFilePortionActionEnum;
    version: PostDownloadDbLogFilePortionVersionEnum;
}
export declare class PostDownloadDbLogFilePortionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDownloadDbLogFilePortionRequest extends SpeakeasyBase {
    queryParams: PostDownloadDbLogFilePortionQueryParams;
    headers: PostDownloadDbLogFilePortionHeaders;
    request?: Uint8Array;
}
export declare class PostDownloadDbLogFilePortionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
