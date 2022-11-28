import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAuthorizeDbSecurityGroupIngressActionEnum {
    AuthorizeDbSecurityGroupIngress = "AuthorizeDBSecurityGroupIngress"
}
export declare enum GetAuthorizeDbSecurityGroupIngressVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}
export declare class GetAuthorizeDbSecurityGroupIngressQueryParams extends SpeakeasyBase {
    action: GetAuthorizeDbSecurityGroupIngressActionEnum;
    cidrip?: string;
    dbSecurityGroupName: string;
    ec2SecurityGroupId?: string;
    ec2SecurityGroupName?: string;
    ec2SecurityGroupOwnerId?: string;
    version: GetAuthorizeDbSecurityGroupIngressVersionEnum;
}
export declare class GetAuthorizeDbSecurityGroupIngressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAuthorizeDbSecurityGroupIngressRequest extends SpeakeasyBase {
    queryParams: GetAuthorizeDbSecurityGroupIngressQueryParams;
    headers: GetAuthorizeDbSecurityGroupIngressHeaders;
}
export declare class GetAuthorizeDbSecurityGroupIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
