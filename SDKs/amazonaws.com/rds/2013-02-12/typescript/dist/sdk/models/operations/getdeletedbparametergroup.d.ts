import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteDbParameterGroupActionEnum {
    DeleteDbParameterGroup = "DeleteDBParameterGroup"
}
export declare enum GetDeleteDbParameterGroupVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class GetDeleteDbParameterGroupQueryParams extends SpeakeasyBase {
    action: GetDeleteDbParameterGroupActionEnum;
    dbParameterGroupName: string;
    version: GetDeleteDbParameterGroupVersionEnum;
}
export declare class GetDeleteDbParameterGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteDbParameterGroupRequest extends SpeakeasyBase {
    queryParams: GetDeleteDbParameterGroupQueryParams;
    headers: GetDeleteDbParameterGroupHeaders;
}
export declare class GetDeleteDbParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
