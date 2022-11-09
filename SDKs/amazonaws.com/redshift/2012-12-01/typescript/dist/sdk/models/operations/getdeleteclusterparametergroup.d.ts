import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteClusterParameterGroupActionEnum {
    DeleteClusterParameterGroup = "DeleteClusterParameterGroup"
}
export declare enum GetDeleteClusterParameterGroupVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDeleteClusterParameterGroupQueryParams extends SpeakeasyBase {
    action: GetDeleteClusterParameterGroupActionEnum;
    parameterGroupName: string;
    version: GetDeleteClusterParameterGroupVersionEnum;
}
export declare class GetDeleteClusterParameterGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteClusterParameterGroupRequest extends SpeakeasyBase {
    queryParams: GetDeleteClusterParameterGroupQueryParams;
    headers: GetDeleteClusterParameterGroupHeaders;
}
export declare class GetDeleteClusterParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
