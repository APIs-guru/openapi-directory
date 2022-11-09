import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeSnapshotCopyGrantsActionEnum {
    DescribeSnapshotCopyGrants = "DescribeSnapshotCopyGrants"
}
export declare enum PostDescribeSnapshotCopyGrantsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDescribeSnapshotCopyGrantsQueryParams extends SpeakeasyBase {
    action: PostDescribeSnapshotCopyGrantsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeSnapshotCopyGrantsVersionEnum;
}
export declare class PostDescribeSnapshotCopyGrantsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeSnapshotCopyGrantsRequest extends SpeakeasyBase {
    queryParams: PostDescribeSnapshotCopyGrantsQueryParams;
    headers: PostDescribeSnapshotCopyGrantsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeSnapshotCopyGrantsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
