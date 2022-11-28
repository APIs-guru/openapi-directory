import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCreateDbSecurityGroupActionEnum {
    CreateDbSecurityGroup = "CreateDBSecurityGroup"
}
export declare enum GetCreateDbSecurityGroupVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GetCreateDbSecurityGroupQueryParams extends SpeakeasyBase {
    action: GetCreateDbSecurityGroupActionEnum;
    dbSecurityGroupDescription: string;
    dbSecurityGroupName: string;
    version: GetCreateDbSecurityGroupVersionEnum;
}
export declare class GetCreateDbSecurityGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateDbSecurityGroupRequest extends SpeakeasyBase {
    queryParams: GetCreateDbSecurityGroupQueryParams;
    headers: GetCreateDbSecurityGroupHeaders;
}
export declare class GetCreateDbSecurityGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
