import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteClusterSnapshotActionEnum {
    DeleteClusterSnapshot = "DeleteClusterSnapshot"
}
export declare enum PostDeleteClusterSnapshotVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDeleteClusterSnapshotQueryParams extends SpeakeasyBase {
    action: PostDeleteClusterSnapshotActionEnum;
    version: PostDeleteClusterSnapshotVersionEnum;
}
export declare class PostDeleteClusterSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteClusterSnapshotRequest extends SpeakeasyBase {
    queryParams: PostDeleteClusterSnapshotQueryParams;
    headers: PostDeleteClusterSnapshotHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteClusterSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
