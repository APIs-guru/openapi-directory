import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteDbClusterSnapshotActionEnum {
    DeleteDbClusterSnapshot = "DeleteDBClusterSnapshot"
}
export declare enum PostDeleteDbClusterSnapshotVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDeleteDbClusterSnapshotQueryParams extends SpeakeasyBase {
    action: PostDeleteDbClusterSnapshotActionEnum;
    version: PostDeleteDbClusterSnapshotVersionEnum;
}
export declare class PostDeleteDbClusterSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteDbClusterSnapshotRequest extends SpeakeasyBase {
    queryParams: PostDeleteDbClusterSnapshotQueryParams;
    headers: PostDeleteDbClusterSnapshotHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteDbClusterSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
