import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetRevokeClusterSecurityGroupIngressActionEnum {
    RevokeClusterSecurityGroupIngress = "RevokeClusterSecurityGroupIngress"
}
export declare enum GetRevokeClusterSecurityGroupIngressVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetRevokeClusterSecurityGroupIngressQueryParams extends SpeakeasyBase {
    action: GetRevokeClusterSecurityGroupIngressActionEnum;
    cidrip?: string;
    clusterSecurityGroupName: string;
    ec2SecurityGroupName?: string;
    ec2SecurityGroupOwnerId?: string;
    version: GetRevokeClusterSecurityGroupIngressVersionEnum;
}
export declare class GetRevokeClusterSecurityGroupIngressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRevokeClusterSecurityGroupIngressRequest extends SpeakeasyBase {
    queryParams: GetRevokeClusterSecurityGroupIngressQueryParams;
    headers: GetRevokeClusterSecurityGroupIngressHeaders;
}
export declare class GetRevokeClusterSecurityGroupIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
