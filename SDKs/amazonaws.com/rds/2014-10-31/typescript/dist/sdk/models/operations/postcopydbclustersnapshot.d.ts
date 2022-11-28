import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCopyDbClusterSnapshotActionEnum {
    CopyDbClusterSnapshot = "CopyDBClusterSnapshot"
}
export declare enum PostCopyDbClusterSnapshotVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostCopyDbClusterSnapshotQueryParams extends SpeakeasyBase {
    action: PostCopyDbClusterSnapshotActionEnum;
    version: PostCopyDbClusterSnapshotVersionEnum;
}
export declare class PostCopyDbClusterSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCopyDbClusterSnapshotRequest extends SpeakeasyBase {
    queryParams: PostCopyDbClusterSnapshotQueryParams;
    headers: PostCopyDbClusterSnapshotHeaders;
    request?: Uint8Array;
}
export declare class PostCopyDbClusterSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
