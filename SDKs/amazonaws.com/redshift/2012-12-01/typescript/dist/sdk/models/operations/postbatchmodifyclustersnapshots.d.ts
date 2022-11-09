import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostBatchModifyClusterSnapshotsActionEnum {
    BatchModifyClusterSnapshots = "BatchModifyClusterSnapshots"
}
export declare enum PostBatchModifyClusterSnapshotsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostBatchModifyClusterSnapshotsQueryParams extends SpeakeasyBase {
    action: PostBatchModifyClusterSnapshotsActionEnum;
    version: PostBatchModifyClusterSnapshotsVersionEnum;
}
export declare class PostBatchModifyClusterSnapshotsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostBatchModifyClusterSnapshotsRequest extends SpeakeasyBase {
    queryParams: PostBatchModifyClusterSnapshotsQueryParams;
    headers: PostBatchModifyClusterSnapshotsHeaders;
    request?: Uint8Array;
}
export declare class PostBatchModifyClusterSnapshotsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
