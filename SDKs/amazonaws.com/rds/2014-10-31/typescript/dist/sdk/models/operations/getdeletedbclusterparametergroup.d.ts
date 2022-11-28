import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteDbClusterParameterGroupActionEnum {
    DeleteDbClusterParameterGroup = "DeleteDBClusterParameterGroup"
}
export declare enum GetDeleteDbClusterParameterGroupVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetDeleteDbClusterParameterGroupQueryParams extends SpeakeasyBase {
    action: GetDeleteDbClusterParameterGroupActionEnum;
    dbClusterParameterGroupName: string;
    version: GetDeleteDbClusterParameterGroupVersionEnum;
}
export declare class GetDeleteDbClusterParameterGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteDbClusterParameterGroupRequest extends SpeakeasyBase {
    queryParams: GetDeleteDbClusterParameterGroupQueryParams;
    headers: GetDeleteDbClusterParameterGroupHeaders;
}
export declare class GetDeleteDbClusterParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
