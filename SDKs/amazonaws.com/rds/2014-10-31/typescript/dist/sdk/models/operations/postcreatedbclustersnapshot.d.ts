import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateDbClusterSnapshotActionEnum {
    CreateDbClusterSnapshot = "CreateDBClusterSnapshot"
}
export declare enum PostCreateDbClusterSnapshotVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostCreateDbClusterSnapshotQueryParams extends SpeakeasyBase {
    action: PostCreateDbClusterSnapshotActionEnum;
    version: PostCreateDbClusterSnapshotVersionEnum;
}
export declare class PostCreateDbClusterSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateDbClusterSnapshotRequest extends SpeakeasyBase {
    queryParams: PostCreateDbClusterSnapshotQueryParams;
    headers: PostCreateDbClusterSnapshotHeaders;
    request?: Uint8Array;
}
export declare class PostCreateDbClusterSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
