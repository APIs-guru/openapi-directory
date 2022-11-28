import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteDbSecurityGroupActionEnum {
    DeleteDbSecurityGroup = "DeleteDBSecurityGroup"
}
export declare enum GetDeleteDbSecurityGroupVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GetDeleteDbSecurityGroupQueryParams extends SpeakeasyBase {
    action: GetDeleteDbSecurityGroupActionEnum;
    dbSecurityGroupName: string;
    version: GetDeleteDbSecurityGroupVersionEnum;
}
export declare class GetDeleteDbSecurityGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteDbSecurityGroupRequest extends SpeakeasyBase {
    queryParams: GetDeleteDbSecurityGroupQueryParams;
    headers: GetDeleteDbSecurityGroupHeaders;
}
export declare class GetDeleteDbSecurityGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
