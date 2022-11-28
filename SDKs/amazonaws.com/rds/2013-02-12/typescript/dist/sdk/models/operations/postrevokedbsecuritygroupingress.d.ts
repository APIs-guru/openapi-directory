import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostRevokeDbSecurityGroupIngressActionEnum {
    RevokeDbSecurityGroupIngress = "RevokeDBSecurityGroupIngress"
}
export declare enum PostRevokeDbSecurityGroupIngressVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class PostRevokeDbSecurityGroupIngressQueryParams extends SpeakeasyBase {
    action: PostRevokeDbSecurityGroupIngressActionEnum;
    version: PostRevokeDbSecurityGroupIngressVersionEnum;
}
export declare class PostRevokeDbSecurityGroupIngressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRevokeDbSecurityGroupIngressRequest extends SpeakeasyBase {
    queryParams: PostRevokeDbSecurityGroupIngressQueryParams;
    headers: PostRevokeDbSecurityGroupIngressHeaders;
    request?: Uint8Array;
}
export declare class PostRevokeDbSecurityGroupIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
