import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeClusterSnapshotsActionEnum {
    DescribeClusterSnapshots = "DescribeClusterSnapshots"
}
export declare enum PostDescribeClusterSnapshotsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDescribeClusterSnapshotsQueryParams extends SpeakeasyBase {
    action: PostDescribeClusterSnapshotsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeClusterSnapshotsVersionEnum;
}
export declare class PostDescribeClusterSnapshotsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeClusterSnapshotsRequest extends SpeakeasyBase {
    queryParams: PostDescribeClusterSnapshotsQueryParams;
    headers: PostDescribeClusterSnapshotsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeClusterSnapshotsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
