import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetModifySnapshotCopyRetentionPeriodActionEnum {
    ModifySnapshotCopyRetentionPeriod = "ModifySnapshotCopyRetentionPeriod"
}
export declare enum GetModifySnapshotCopyRetentionPeriodVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetModifySnapshotCopyRetentionPeriodQueryParams extends SpeakeasyBase {
    action: GetModifySnapshotCopyRetentionPeriodActionEnum;
    clusterIdentifier: string;
    manual?: boolean;
    retentionPeriod: number;
    version: GetModifySnapshotCopyRetentionPeriodVersionEnum;
}
export declare class GetModifySnapshotCopyRetentionPeriodHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifySnapshotCopyRetentionPeriodRequest extends SpeakeasyBase {
    queryParams: GetModifySnapshotCopyRetentionPeriodQueryParams;
    headers: GetModifySnapshotCopyRetentionPeriodHeaders;
}
export declare class GetModifySnapshotCopyRetentionPeriodResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
