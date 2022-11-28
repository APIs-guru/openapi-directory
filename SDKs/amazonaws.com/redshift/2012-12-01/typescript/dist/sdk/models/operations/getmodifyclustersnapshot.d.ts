import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifyClusterSnapshotActionEnum {
    ModifyClusterSnapshot = "ModifyClusterSnapshot"
}
export declare enum GetModifyClusterSnapshotVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetModifyClusterSnapshotQueryParams extends SpeakeasyBase {
    action: GetModifyClusterSnapshotActionEnum;
    force?: boolean;
    manualSnapshotRetentionPeriod?: number;
    snapshotIdentifier: string;
    version: GetModifyClusterSnapshotVersionEnum;
}
export declare class GetModifyClusterSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyClusterSnapshotRequest extends SpeakeasyBase {
    queryParams: GetModifyClusterSnapshotQueryParams;
    headers: GetModifyClusterSnapshotHeaders;
}
export declare class GetModifyClusterSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
