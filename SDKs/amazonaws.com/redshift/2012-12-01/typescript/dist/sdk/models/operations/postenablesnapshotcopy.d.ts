import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostEnableSnapshotCopyActionEnum {
    EnableSnapshotCopy = "EnableSnapshotCopy"
}
export declare enum PostEnableSnapshotCopyVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostEnableSnapshotCopyQueryParams extends SpeakeasyBase {
    action: PostEnableSnapshotCopyActionEnum;
    version: PostEnableSnapshotCopyVersionEnum;
}
export declare class PostEnableSnapshotCopyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostEnableSnapshotCopyRequest extends SpeakeasyBase {
    queryParams: PostEnableSnapshotCopyQueryParams;
    headers: PostEnableSnapshotCopyHeaders;
    request?: Uint8Array;
}
export declare class PostEnableSnapshotCopyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
