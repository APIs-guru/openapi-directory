import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetRevokeDbSecurityGroupIngressActionEnum {
    RevokeDbSecurityGroupIngress = "RevokeDBSecurityGroupIngress"
}
export declare enum GetRevokeDbSecurityGroupIngressVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}
export declare class GetRevokeDbSecurityGroupIngressQueryParams extends SpeakeasyBase {
    action: GetRevokeDbSecurityGroupIngressActionEnum;
    cidrip?: string;
    dbSecurityGroupName: string;
    ec2SecurityGroupId?: string;
    ec2SecurityGroupName?: string;
    ec2SecurityGroupOwnerId?: string;
    version: GetRevokeDbSecurityGroupIngressVersionEnum;
}
export declare class GetRevokeDbSecurityGroupIngressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRevokeDbSecurityGroupIngressRequest extends SpeakeasyBase {
    queryParams: GetRevokeDbSecurityGroupIngressQueryParams;
    headers: GetRevokeDbSecurityGroupIngressHeaders;
}
export declare class GetRevokeDbSecurityGroupIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
