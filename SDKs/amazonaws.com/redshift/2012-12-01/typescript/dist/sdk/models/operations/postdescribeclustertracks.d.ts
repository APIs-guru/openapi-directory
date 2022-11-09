import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeClusterTracksActionEnum {
    DescribeClusterTracks = "DescribeClusterTracks"
}
export declare enum PostDescribeClusterTracksVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDescribeClusterTracksQueryParams extends SpeakeasyBase {
    action: PostDescribeClusterTracksActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeClusterTracksVersionEnum;
}
export declare class PostDescribeClusterTracksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeClusterTracksRequest extends SpeakeasyBase {
    queryParams: PostDescribeClusterTracksQueryParams;
    headers: PostDescribeClusterTracksHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeClusterTracksResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
