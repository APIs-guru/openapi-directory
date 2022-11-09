import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteSnapshotCopyGrantActionEnum {
    DeleteSnapshotCopyGrant = "DeleteSnapshotCopyGrant"
}
export declare enum PostDeleteSnapshotCopyGrantVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDeleteSnapshotCopyGrantQueryParams extends SpeakeasyBase {
    action: PostDeleteSnapshotCopyGrantActionEnum;
    version: PostDeleteSnapshotCopyGrantVersionEnum;
}
export declare class PostDeleteSnapshotCopyGrantHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteSnapshotCopyGrantRequest extends SpeakeasyBase {
    queryParams: PostDeleteSnapshotCopyGrantQueryParams;
    headers: PostDeleteSnapshotCopyGrantHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteSnapshotCopyGrantResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
