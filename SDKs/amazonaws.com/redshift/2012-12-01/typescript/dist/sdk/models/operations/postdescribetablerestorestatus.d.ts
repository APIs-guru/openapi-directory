import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeTableRestoreStatusActionEnum {
    DescribeTableRestoreStatus = "DescribeTableRestoreStatus"
}
export declare enum PostDescribeTableRestoreStatusVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDescribeTableRestoreStatusQueryParams extends SpeakeasyBase {
    action: PostDescribeTableRestoreStatusActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeTableRestoreStatusVersionEnum;
}
export declare class PostDescribeTableRestoreStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeTableRestoreStatusRequest extends SpeakeasyBase {
    queryParams: PostDescribeTableRestoreStatusQueryParams;
    headers: PostDescribeTableRestoreStatusHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeTableRestoreStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
