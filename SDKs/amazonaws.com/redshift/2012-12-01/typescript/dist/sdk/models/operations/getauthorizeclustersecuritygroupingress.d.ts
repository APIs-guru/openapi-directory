import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAuthorizeClusterSecurityGroupIngressActionEnum {
    AuthorizeClusterSecurityGroupIngress = "AuthorizeClusterSecurityGroupIngress"
}
export declare enum GetAuthorizeClusterSecurityGroupIngressVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetAuthorizeClusterSecurityGroupIngressQueryParams extends SpeakeasyBase {
    action: GetAuthorizeClusterSecurityGroupIngressActionEnum;
    cidrip?: string;
    clusterSecurityGroupName: string;
    ec2SecurityGroupName?: string;
    ec2SecurityGroupOwnerId?: string;
    version: GetAuthorizeClusterSecurityGroupIngressVersionEnum;
}
export declare class GetAuthorizeClusterSecurityGroupIngressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAuthorizeClusterSecurityGroupIngressRequest extends SpeakeasyBase {
    queryParams: GetAuthorizeClusterSecurityGroupIngressQueryParams;
    headers: GetAuthorizeClusterSecurityGroupIngressHeaders;
}
export declare class GetAuthorizeClusterSecurityGroupIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
