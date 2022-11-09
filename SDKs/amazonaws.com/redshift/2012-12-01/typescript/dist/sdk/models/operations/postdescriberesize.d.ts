import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeResizeActionEnum {
    DescribeResize = "DescribeResize"
}
export declare enum PostDescribeResizeVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDescribeResizeQueryParams extends SpeakeasyBase {
    action: PostDescribeResizeActionEnum;
    version: PostDescribeResizeVersionEnum;
}
export declare class PostDescribeResizeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeResizeRequest extends SpeakeasyBase {
    queryParams: PostDescribeResizeQueryParams;
    headers: PostDescribeResizeHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeResizeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
