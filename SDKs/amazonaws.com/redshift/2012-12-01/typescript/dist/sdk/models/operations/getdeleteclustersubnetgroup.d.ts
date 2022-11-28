import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteClusterSubnetGroupActionEnum {
    DeleteClusterSubnetGroup = "DeleteClusterSubnetGroup"
}
export declare enum GetDeleteClusterSubnetGroupVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDeleteClusterSubnetGroupQueryParams extends SpeakeasyBase {
    action: GetDeleteClusterSubnetGroupActionEnum;
    clusterSubnetGroupName: string;
    version: GetDeleteClusterSubnetGroupVersionEnum;
}
export declare class GetDeleteClusterSubnetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteClusterSubnetGroupRequest extends SpeakeasyBase {
    queryParams: GetDeleteClusterSubnetGroupQueryParams;
    headers: GetDeleteClusterSubnetGroupHeaders;
}
export declare class GetDeleteClusterSubnetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
