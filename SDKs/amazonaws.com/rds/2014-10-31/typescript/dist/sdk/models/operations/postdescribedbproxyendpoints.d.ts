import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeDbProxyEndpointsActionEnum {
    DescribeDbProxyEndpoints = "DescribeDBProxyEndpoints"
}
export declare enum PostDescribeDbProxyEndpointsVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDescribeDbProxyEndpointsQueryParams extends SpeakeasyBase {
    action: PostDescribeDbProxyEndpointsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeDbProxyEndpointsVersionEnum;
}
export declare class PostDescribeDbProxyEndpointsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeDbProxyEndpointsRequest extends SpeakeasyBase {
    queryParams: PostDescribeDbProxyEndpointsQueryParams;
    headers: PostDescribeDbProxyEndpointsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeDbProxyEndpointsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
