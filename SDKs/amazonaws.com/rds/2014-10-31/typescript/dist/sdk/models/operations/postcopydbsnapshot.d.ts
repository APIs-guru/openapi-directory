import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCopyDbSnapshotActionEnum {
    CopyDbSnapshot = "CopyDBSnapshot"
}
export declare enum PostCopyDbSnapshotVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostCopyDbSnapshotQueryParams extends SpeakeasyBase {
    action: PostCopyDbSnapshotActionEnum;
    version: PostCopyDbSnapshotVersionEnum;
}
export declare class PostCopyDbSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCopyDbSnapshotRequest extends SpeakeasyBase {
    queryParams: PostCopyDbSnapshotQueryParams;
    headers: PostCopyDbSnapshotHeaders;
    request?: Uint8Array;
}
export declare class PostCopyDbSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
