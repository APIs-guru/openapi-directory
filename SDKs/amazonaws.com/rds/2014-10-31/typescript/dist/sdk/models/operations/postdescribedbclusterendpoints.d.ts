import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeDbClusterEndpointsActionEnum {
    DescribeDbClusterEndpoints = "DescribeDBClusterEndpoints"
}
export declare enum PostDescribeDbClusterEndpointsVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDescribeDbClusterEndpointsQueryParams extends SpeakeasyBase {
    action: PostDescribeDbClusterEndpointsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeDbClusterEndpointsVersionEnum;
}
export declare class PostDescribeDbClusterEndpointsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeDbClusterEndpointsRequest extends SpeakeasyBase {
    queryParams: PostDescribeDbClusterEndpointsQueryParams;
    headers: PostDescribeDbClusterEndpointsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeDbClusterEndpointsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
