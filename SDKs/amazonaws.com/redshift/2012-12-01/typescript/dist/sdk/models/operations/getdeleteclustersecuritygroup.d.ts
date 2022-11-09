import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteClusterSecurityGroupActionEnum {
    DeleteClusterSecurityGroup = "DeleteClusterSecurityGroup"
}
export declare enum GetDeleteClusterSecurityGroupVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDeleteClusterSecurityGroupQueryParams extends SpeakeasyBase {
    action: GetDeleteClusterSecurityGroupActionEnum;
    clusterSecurityGroupName: string;
    version: GetDeleteClusterSecurityGroupVersionEnum;
}
export declare class GetDeleteClusterSecurityGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteClusterSecurityGroupRequest extends SpeakeasyBase {
    queryParams: GetDeleteClusterSecurityGroupQueryParams;
    headers: GetDeleteClusterSecurityGroupHeaders;
}
export declare class GetDeleteClusterSecurityGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
