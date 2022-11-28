import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostRevokeClusterSecurityGroupIngressActionEnum {
    RevokeClusterSecurityGroupIngress = "RevokeClusterSecurityGroupIngress"
}
export declare enum PostRevokeClusterSecurityGroupIngressVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostRevokeClusterSecurityGroupIngressQueryParams extends SpeakeasyBase {
    action: PostRevokeClusterSecurityGroupIngressActionEnum;
    version: PostRevokeClusterSecurityGroupIngressVersionEnum;
}
export declare class PostRevokeClusterSecurityGroupIngressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRevokeClusterSecurityGroupIngressRequest extends SpeakeasyBase {
    queryParams: PostRevokeClusterSecurityGroupIngressQueryParams;
    headers: PostRevokeClusterSecurityGroupIngressHeaders;
    request?: Uint8Array;
}
export declare class PostRevokeClusterSecurityGroupIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
