import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateSnapshotCopyGrantActionEnum {
    CreateSnapshotCopyGrant = "CreateSnapshotCopyGrant"
}
export declare enum PostCreateSnapshotCopyGrantVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostCreateSnapshotCopyGrantQueryParams extends SpeakeasyBase {
    action: PostCreateSnapshotCopyGrantActionEnum;
    version: PostCreateSnapshotCopyGrantVersionEnum;
}
export declare class PostCreateSnapshotCopyGrantHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateSnapshotCopyGrantRequest extends SpeakeasyBase {
    queryParams: PostCreateSnapshotCopyGrantQueryParams;
    headers: PostCreateSnapshotCopyGrantHeaders;
    request?: Uint8Array;
}
export declare class PostCreateSnapshotCopyGrantResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
