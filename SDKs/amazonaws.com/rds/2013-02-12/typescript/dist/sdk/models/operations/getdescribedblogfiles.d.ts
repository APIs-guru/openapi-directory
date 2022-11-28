import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeDbLogFilesActionEnum {
    DescribeDbLogFiles = "DescribeDBLogFiles"
}
export declare enum GetDescribeDbLogFilesVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class GetDescribeDbLogFilesQueryParams extends SpeakeasyBase {
    action: GetDescribeDbLogFilesActionEnum;
    dbInstanceIdentifier: string;
    fileLastWritten?: number;
    fileSize?: number;
    filenameContains?: string;
    marker?: string;
    maxRecords?: number;
    version: GetDescribeDbLogFilesVersionEnum;
}
export declare class GetDescribeDbLogFilesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeDbLogFilesRequest extends SpeakeasyBase {
    queryParams: GetDescribeDbLogFilesQueryParams;
    headers: GetDescribeDbLogFilesHeaders;
}
export declare class GetDescribeDbLogFilesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
