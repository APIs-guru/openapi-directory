import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetEnableSnapshotCopyActionEnum {
    EnableSnapshotCopy = "EnableSnapshotCopy"
}
export declare enum GetEnableSnapshotCopyVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetEnableSnapshotCopyQueryParams extends SpeakeasyBase {
    action: GetEnableSnapshotCopyActionEnum;
    clusterIdentifier: string;
    destinationRegion: string;
    manualSnapshotRetentionPeriod?: number;
    retentionPeriod?: number;
    snapshotCopyGrantName?: string;
    version: GetEnableSnapshotCopyVersionEnum;
}
export declare class GetEnableSnapshotCopyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEnableSnapshotCopyRequest extends SpeakeasyBase {
    queryParams: GetEnableSnapshotCopyQueryParams;
    headers: GetEnableSnapshotCopyHeaders;
}
export declare class GetEnableSnapshotCopyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
