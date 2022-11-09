import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostAuthorizeSnapshotAccessActionEnum {
    AuthorizeSnapshotAccess = "AuthorizeSnapshotAccess"
}
export declare enum PostAuthorizeSnapshotAccessVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostAuthorizeSnapshotAccessQueryParams extends SpeakeasyBase {
    action: PostAuthorizeSnapshotAccessActionEnum;
    version: PostAuthorizeSnapshotAccessVersionEnum;
}
export declare class PostAuthorizeSnapshotAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAuthorizeSnapshotAccessRequest extends SpeakeasyBase {
    queryParams: PostAuthorizeSnapshotAccessQueryParams;
    headers: PostAuthorizeSnapshotAccessHeaders;
    request?: Uint8Array;
}
export declare class PostAuthorizeSnapshotAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
