import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostRestoreTableFromClusterSnapshotActionEnum {
    RestoreTableFromClusterSnapshot = "RestoreTableFromClusterSnapshot"
}
export declare enum PostRestoreTableFromClusterSnapshotVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostRestoreTableFromClusterSnapshotQueryParams extends SpeakeasyBase {
    action: PostRestoreTableFromClusterSnapshotActionEnum;
    version: PostRestoreTableFromClusterSnapshotVersionEnum;
}
export declare class PostRestoreTableFromClusterSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRestoreTableFromClusterSnapshotRequest extends SpeakeasyBase {
    queryParams: PostRestoreTableFromClusterSnapshotQueryParams;
    headers: PostRestoreTableFromClusterSnapshotHeaders;
    request?: Uint8Array;
}
export declare class PostRestoreTableFromClusterSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
