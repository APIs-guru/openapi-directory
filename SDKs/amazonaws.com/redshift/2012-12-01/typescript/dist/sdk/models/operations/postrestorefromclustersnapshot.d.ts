import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostRestoreFromClusterSnapshotActionEnum {
    RestoreFromClusterSnapshot = "RestoreFromClusterSnapshot"
}
export declare enum PostRestoreFromClusterSnapshotVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostRestoreFromClusterSnapshotQueryParams extends SpeakeasyBase {
    action: PostRestoreFromClusterSnapshotActionEnum;
    version: PostRestoreFromClusterSnapshotVersionEnum;
}
export declare class PostRestoreFromClusterSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRestoreFromClusterSnapshotRequest extends SpeakeasyBase {
    queryParams: PostRestoreFromClusterSnapshotQueryParams;
    headers: PostRestoreFromClusterSnapshotHeaders;
    request?: Uint8Array;
}
export declare class PostRestoreFromClusterSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
