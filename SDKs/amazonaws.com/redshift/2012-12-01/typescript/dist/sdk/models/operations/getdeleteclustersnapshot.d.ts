import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteClusterSnapshotActionEnum {
    DeleteClusterSnapshot = "DeleteClusterSnapshot"
}
export declare enum GetDeleteClusterSnapshotVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDeleteClusterSnapshotQueryParams extends SpeakeasyBase {
    action: GetDeleteClusterSnapshotActionEnum;
    snapshotClusterIdentifier?: string;
    snapshotIdentifier: string;
    version: GetDeleteClusterSnapshotVersionEnum;
}
export declare class GetDeleteClusterSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteClusterSnapshotRequest extends SpeakeasyBase {
    queryParams: GetDeleteClusterSnapshotQueryParams;
    headers: GetDeleteClusterSnapshotHeaders;
}
export declare class GetDeleteClusterSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
