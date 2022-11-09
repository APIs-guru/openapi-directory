import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeDataSharesActionEnum {
    DescribeDataShares = "DescribeDataShares"
}
export declare enum PostDescribeDataSharesVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDescribeDataSharesQueryParams extends SpeakeasyBase {
    action: PostDescribeDataSharesActionEnum;
    version: PostDescribeDataSharesVersionEnum;
}
export declare class PostDescribeDataSharesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeDataSharesRequest extends SpeakeasyBase {
    queryParams: PostDescribeDataSharesQueryParams;
    headers: PostDescribeDataSharesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeDataSharesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
