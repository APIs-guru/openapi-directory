import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeDbLogFilesActionEnum {
    DescribeDbLogFiles = "DescribeDBLogFiles"
}
export declare enum PostDescribeDbLogFilesVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}
export declare class PostDescribeDbLogFilesQueryParams extends SpeakeasyBase {
    action: PostDescribeDbLogFilesActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeDbLogFilesVersionEnum;
}
export declare class PostDescribeDbLogFilesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeDbLogFilesRequest extends SpeakeasyBase {
    queryParams: PostDescribeDbLogFilesQueryParams;
    headers: PostDescribeDbLogFilesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeDbLogFilesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
