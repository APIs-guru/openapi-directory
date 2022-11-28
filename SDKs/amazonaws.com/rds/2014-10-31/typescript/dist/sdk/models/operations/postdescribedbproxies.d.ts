import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeDbProxiesActionEnum {
    DescribeDbProxies = "DescribeDBProxies"
}
export declare enum PostDescribeDbProxiesVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDescribeDbProxiesQueryParams extends SpeakeasyBase {
    action: PostDescribeDbProxiesActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeDbProxiesVersionEnum;
}
export declare class PostDescribeDbProxiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeDbProxiesRequest extends SpeakeasyBase {
    queryParams: PostDescribeDbProxiesQueryParams;
    headers: PostDescribeDbProxiesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeDbProxiesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
