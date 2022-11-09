import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeLoggingStatusActionEnum {
    DescribeLoggingStatus = "DescribeLoggingStatus"
}
export declare enum PostDescribeLoggingStatusVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDescribeLoggingStatusQueryParams extends SpeakeasyBase {
    action: PostDescribeLoggingStatusActionEnum;
    version: PostDescribeLoggingStatusVersionEnum;
}
export declare class PostDescribeLoggingStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeLoggingStatusRequest extends SpeakeasyBase {
    queryParams: PostDescribeLoggingStatusQueryParams;
    headers: PostDescribeLoggingStatusHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeLoggingStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
