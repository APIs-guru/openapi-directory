import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAuthorizeEndpointAccessActionEnum {
    AuthorizeEndpointAccess = "AuthorizeEndpointAccess"
}
export declare enum PostAuthorizeEndpointAccessVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostAuthorizeEndpointAccessQueryParams extends SpeakeasyBase {
    action: PostAuthorizeEndpointAccessActionEnum;
    version: PostAuthorizeEndpointAccessVersionEnum;
}
export declare class PostAuthorizeEndpointAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAuthorizeEndpointAccessRequest extends SpeakeasyBase {
    queryParams: PostAuthorizeEndpointAccessQueryParams;
    headers: PostAuthorizeEndpointAccessHeaders;
    request?: Uint8Array;
}
export declare class PostAuthorizeEndpointAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
