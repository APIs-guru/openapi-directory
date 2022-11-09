import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeDbSnapshotsActionEnum {
    DescribeDbSnapshots = "DescribeDBSnapshots"
}
export declare enum PostDescribeDbSnapshotsVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class PostDescribeDbSnapshotsQueryParams extends SpeakeasyBase {
    action: PostDescribeDbSnapshotsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeDbSnapshotsVersionEnum;
}
export declare class PostDescribeDbSnapshotsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeDbSnapshotsRequest extends SpeakeasyBase {
    queryParams: PostDescribeDbSnapshotsQueryParams;
    headers: PostDescribeDbSnapshotsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeDbSnapshotsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
