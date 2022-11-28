import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCreateDbParameterGroupActionEnum {
    CreateDbParameterGroup = "CreateDBParameterGroup"
}
export declare enum GetCreateDbParameterGroupVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class GetCreateDbParameterGroupQueryParams extends SpeakeasyBase {
    action: GetCreateDbParameterGroupActionEnum;
    dbParameterGroupFamily: string;
    dbParameterGroupName: string;
    description: string;
    version: GetCreateDbParameterGroupVersionEnum;
}
export declare class GetCreateDbParameterGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateDbParameterGroupRequest extends SpeakeasyBase {
    queryParams: GetCreateDbParameterGroupQueryParams;
    headers: GetCreateDbParameterGroupHeaders;
}
export declare class GetCreateDbParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
