import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAuthorizeDbSecurityGroupIngressActionEnum {
    AuthorizeDbSecurityGroupIngress = "AuthorizeDBSecurityGroupIngress"
}
export declare enum PostAuthorizeDbSecurityGroupIngressVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class PostAuthorizeDbSecurityGroupIngressQueryParams extends SpeakeasyBase {
    action: PostAuthorizeDbSecurityGroupIngressActionEnum;
    version: PostAuthorizeDbSecurityGroupIngressVersionEnum;
}
export declare class PostAuthorizeDbSecurityGroupIngressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAuthorizeDbSecurityGroupIngressRequest extends SpeakeasyBase {
    queryParams: PostAuthorizeDbSecurityGroupIngressQueryParams;
    headers: PostAuthorizeDbSecurityGroupIngressHeaders;
    request?: Uint8Array;
}
export declare class PostAuthorizeDbSecurityGroupIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
