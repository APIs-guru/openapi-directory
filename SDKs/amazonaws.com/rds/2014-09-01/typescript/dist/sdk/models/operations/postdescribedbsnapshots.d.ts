import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeDbSnapshotsActionEnum {
    DescribeDbSnapshots = "DescribeDBSnapshots"
}
export declare enum PostDescribeDbSnapshotsVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class PostDescribeDbSnapshotsQueryParams extends SpeakeasyBase {
    action: PostDescribeDbSnapshotsActionEnum;
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
