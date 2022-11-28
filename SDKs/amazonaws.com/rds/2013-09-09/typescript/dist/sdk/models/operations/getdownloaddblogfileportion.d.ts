import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDownloadDbLogFilePortionActionEnum {
    DownloadDbLogFilePortion = "DownloadDBLogFilePortion"
}
export declare enum GetDownloadDbLogFilePortionVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}
export declare class GetDownloadDbLogFilePortionQueryParams extends SpeakeasyBase {
    action: GetDownloadDbLogFilePortionActionEnum;
    dbInstanceIdentifier: string;
    logFileName: string;
    marker?: string;
    numberOfLines?: number;
    version: GetDownloadDbLogFilePortionVersionEnum;
}
export declare class GetDownloadDbLogFilePortionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDownloadDbLogFilePortionRequest extends SpeakeasyBase {
    queryParams: GetDownloadDbLogFilePortionQueryParams;
    headers: GetDownloadDbLogFilePortionHeaders;
}
export declare class GetDownloadDbLogFilePortionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
