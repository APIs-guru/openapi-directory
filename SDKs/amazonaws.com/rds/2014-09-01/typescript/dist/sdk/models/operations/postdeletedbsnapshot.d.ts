import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteDbSnapshotActionEnum {
    DeleteDbSnapshot = "DeleteDBSnapshot"
}
export declare enum PostDeleteDbSnapshotVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
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
