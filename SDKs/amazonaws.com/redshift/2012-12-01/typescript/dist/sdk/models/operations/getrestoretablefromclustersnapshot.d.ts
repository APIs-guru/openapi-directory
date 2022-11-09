import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetRestoreTableFromClusterSnapshotActionEnum {
    RestoreTableFromClusterSnapshot = "RestoreTableFromClusterSnapshot"
}
export declare enum GetRestoreTableFromClusterSnapshotVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetRestoreTableFromClusterSnapshotQueryParams extends SpeakeasyBase {
    action: GetRestoreTableFromClusterSnapshotActionEnum;
    clusterIdentifier: string;
    enableCaseSensitiveIdentifier?: boolean;
    newTableName: string;
    snapshotIdentifier: string;
    sourceDatabaseName: string;
    sourceSchemaName?: string;
    sourceTableName: string;
    targetDatabaseName?: string;
    targetSchemaName?: string;
    version: GetRestoreTableFromClusterSnapshotVersionEnum;
}
export declare class GetRestoreTableFromClusterSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRestoreTableFromClusterSnapshotRequest extends SpeakeasyBase {
    queryParams: GetRestoreTableFromClusterSnapshotQueryParams;
    headers: GetRestoreTableFromClusterSnapshotHeaders;
}
export declare class GetRestoreTableFromClusterSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
