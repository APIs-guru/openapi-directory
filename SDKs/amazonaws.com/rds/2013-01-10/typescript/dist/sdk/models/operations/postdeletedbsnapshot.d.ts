import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteDbSnapshotActionEnum {
    DeleteDbSnapshot = "DeleteDBSnapshot"
}
export declare enum PostDeleteDbSnapshotVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class PostDeleteDbSnapshotQueryParams extends SpeakeasyBase {
    action: PostDeleteDbSnapshotActionEnum;
    version: PostDeleteDbSnapshotVersionEnum;
}
export declare class PostDeleteDbSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteDbSnapshotRequest extends SpeakeasyBase {
    queryParams: PostDeleteDbSnapshotQueryParams;
    headers: PostDeleteDbSnapshotHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteDbSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
