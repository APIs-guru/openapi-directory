import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCopyClusterSnapshotActionEnum {
    CopyClusterSnapshot = "CopyClusterSnapshot"
}
export declare enum PostCopyClusterSnapshotVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostCopyClusterSnapshotQueryParams extends SpeakeasyBase {
    action: PostCopyClusterSnapshotActionEnum;
    version: PostCopyClusterSnapshotVersionEnum;
}
export declare class PostCopyClusterSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCopyClusterSnapshotRequest extends SpeakeasyBase {
    queryParams: PostCopyClusterSnapshotQueryParams;
    headers: PostCopyClusterSnapshotHeaders;
    request?: Uint8Array;
}
export declare class PostCopyClusterSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
