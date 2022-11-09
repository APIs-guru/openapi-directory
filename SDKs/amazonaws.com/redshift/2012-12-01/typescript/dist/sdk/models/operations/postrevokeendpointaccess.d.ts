import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostRevokeEndpointAccessActionEnum {
    RevokeEndpointAccess = "RevokeEndpointAccess"
}
export declare enum PostRevokeEndpointAccessVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostRevokeEndpointAccessQueryParams extends SpeakeasyBase {
    action: PostRevokeEndpointAccessActionEnum;
    version: PostRevokeEndpointAccessVersionEnum;
}
export declare class PostRevokeEndpointAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRevokeEndpointAccessRequest extends SpeakeasyBase {
    queryParams: PostRevokeEndpointAccessQueryParams;
    headers: PostRevokeEndpointAccessHeaders;
    request?: Uint8Array;
}
export declare class PostRevokeEndpointAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
