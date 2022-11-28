import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifyClusterSubnetGroupActionEnum {
    ModifyClusterSubnetGroup = "ModifyClusterSubnetGroup"
}
export declare enum GetModifyClusterSubnetGroupVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetModifyClusterSubnetGroupQueryParams extends SpeakeasyBase {
    action: GetModifyClusterSubnetGroupActionEnum;
    clusterSubnetGroupName: string;
    description?: string;
    subnetIds: string[];
    version: GetModifyClusterSubnetGroupVersionEnum;
}
export declare class GetModifyClusterSubnetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyClusterSubnetGroupRequest extends SpeakeasyBase {
    queryParams: GetModifyClusterSubnetGroupQueryParams;
    headers: GetModifyClusterSubnetGroupHeaders;
}
export declare class GetModifyClusterSubnetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
