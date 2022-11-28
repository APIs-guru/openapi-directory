import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAuthorizeClusterSecurityGroupIngressActionEnum {
    AuthorizeClusterSecurityGroupIngress = "AuthorizeClusterSecurityGroupIngress"
}
export declare enum PostAuthorizeClusterSecurityGroupIngressVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostAuthorizeClusterSecurityGroupIngressQueryParams extends SpeakeasyBase {
    action: PostAuthorizeClusterSecurityGroupIngressActionEnum;
    version: PostAuthorizeClusterSecurityGroupIngressVersionEnum;
}
export declare class PostAuthorizeClusterSecurityGroupIngressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAuthorizeClusterSecurityGroupIngressRequest extends SpeakeasyBase {
    queryParams: PostAuthorizeClusterSecurityGroupIngressQueryParams;
    headers: PostAuthorizeClusterSecurityGroupIngressHeaders;
    request?: Uint8Array;
}
export declare class PostAuthorizeClusterSecurityGroupIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
