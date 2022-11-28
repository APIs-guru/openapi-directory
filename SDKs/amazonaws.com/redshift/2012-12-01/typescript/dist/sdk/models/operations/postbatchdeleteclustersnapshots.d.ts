import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostBatchDeleteClusterSnapshotsActionEnum {
    BatchDeleteClusterSnapshots = "BatchDeleteClusterSnapshots"
}
export declare enum PostBatchDeleteClusterSnapshotsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostBatchDeleteClusterSnapshotsQueryParams extends SpeakeasyBase {
    action: PostBatchDeleteClusterSnapshotsActionEnum;
    version: PostBatchDeleteClusterSnapshotsVersionEnum;
}
export declare class PostBatchDeleteClusterSnapshotsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostBatchDeleteClusterSnapshotsRequest extends SpeakeasyBase {
    queryParams: PostBatchDeleteClusterSnapshotsQueryParams;
    headers: PostBatchDeleteClusterSnapshotsHeaders;
    request?: Uint8Array;
}
export declare class PostBatchDeleteClusterSnapshotsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
