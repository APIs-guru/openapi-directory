import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDisableSnapshotCopyActionEnum {
    DisableSnapshotCopy = "DisableSnapshotCopy"
}
export declare enum PostDisableSnapshotCopyVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDisableSnapshotCopyQueryParams extends SpeakeasyBase {
    action: PostDisableSnapshotCopyActionEnum;
    version: PostDisableSnapshotCopyVersionEnum;
}
export declare class PostDisableSnapshotCopyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDisableSnapshotCopyRequest extends SpeakeasyBase {
    queryParams: PostDisableSnapshotCopyQueryParams;
    headers: PostDisableSnapshotCopyHeaders;
    request?: Uint8Array;
}
export declare class PostDisableSnapshotCopyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
