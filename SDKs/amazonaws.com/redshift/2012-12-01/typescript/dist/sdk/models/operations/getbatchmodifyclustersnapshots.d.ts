import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetBatchModifyClusterSnapshotsActionEnum {
    BatchModifyClusterSnapshots = "BatchModifyClusterSnapshots"
}
export declare enum GetBatchModifyClusterSnapshotsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetBatchModifyClusterSnapshotsQueryParams extends SpeakeasyBase {
    action: GetBatchModifyClusterSnapshotsActionEnum;
    force?: boolean;
    manualSnapshotRetentionPeriod?: number;
    snapshotIdentifierList: string[];
    version: GetBatchModifyClusterSnapshotsVersionEnum;
}
export declare class GetBatchModifyClusterSnapshotsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBatchModifyClusterSnapshotsRequest extends SpeakeasyBase {
    queryParams: GetBatchModifyClusterSnapshotsQueryParams;
    headers: GetBatchModifyClusterSnapshotsHeaders;
}
export declare class GetBatchModifyClusterSnapshotsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
