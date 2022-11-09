import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostRevokeSnapshotAccessActionEnum {
    RevokeSnapshotAccess = "RevokeSnapshotAccess"
}
export declare enum PostRevokeSnapshotAccessVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostRevokeSnapshotAccessQueryParams extends SpeakeasyBase {
    action: PostRevokeSnapshotAccessActionEnum;
    version: PostRevokeSnapshotAccessVersionEnum;
}
export declare class PostRevokeSnapshotAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRevokeSnapshotAccessRequest extends SpeakeasyBase {
    queryParams: PostRevokeSnapshotAccessQueryParams;
    headers: PostRevokeSnapshotAccessHeaders;
    request?: Uint8Array;
}
export declare class PostRevokeSnapshotAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
