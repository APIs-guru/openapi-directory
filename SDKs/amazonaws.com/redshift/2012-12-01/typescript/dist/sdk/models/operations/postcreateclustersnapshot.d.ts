import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateClusterSnapshotActionEnum {
    CreateClusterSnapshot = "CreateClusterSnapshot"
}
export declare enum PostCreateClusterSnapshotVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostCreateClusterSnapshotQueryParams extends SpeakeasyBase {
    action: PostCreateClusterSnapshotActionEnum;
    version: PostCreateClusterSnapshotVersionEnum;
}
export declare class PostCreateClusterSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateClusterSnapshotRequest extends SpeakeasyBase {
    queryParams: PostCreateClusterSnapshotQueryParams;
    headers: PostCreateClusterSnapshotHeaders;
    request?: Uint8Array;
}
export declare class PostCreateClusterSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
