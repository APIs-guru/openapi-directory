import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCopyClusterSnapshotActionEnum {
    CopyClusterSnapshot = "CopyClusterSnapshot"
}
export declare enum GetCopyClusterSnapshotVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetCopyClusterSnapshotQueryParams extends SpeakeasyBase {
    action: GetCopyClusterSnapshotActionEnum;
    manualSnapshotRetentionPeriod?: number;
    sourceSnapshotClusterIdentifier?: string;
    sourceSnapshotIdentifier: string;
    targetSnapshotIdentifier: string;
    version: GetCopyClusterSnapshotVersionEnum;
}
export declare class GetCopyClusterSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCopyClusterSnapshotRequest extends SpeakeasyBase {
    queryParams: GetCopyClusterSnapshotQueryParams;
    headers: GetCopyClusterSnapshotHeaders;
}
export declare class GetCopyClusterSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
